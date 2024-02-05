import type { Wallet, WalletAccount } from "@wallet-standard/base";
import { registerWallet } from "@wallet-standard/wallet";

import {
  SolanaSignAndSendTransaction,
  SolanaSignAndSendTransactionOutput,
  SolanaSignIn,
  SolanaSignInOutput,
  SolanaSignMessage,
  SolanaSignMessageOutput,
  SolanaSignTransaction,
  SolanaSignTransactionOutput,
  SolanaSignAndSendTransactionFeature,
  SolanaSignAndSendTransactionMethod,
  SolanaSignInFeature,
  SolanaSignInMethod,
  SolanaSignMessageFeature,
  SolanaSignMessageMethod,
  SolanaSignTransactionFeature,
  SolanaSignTransactionMethod
} from "@solana/wallet-standard-features";
import {
  StandardConnect,
  StandardConnectFeature,
  StandardConnectMethod,
  StandardDisconnect,
  StandardDisconnectFeature,
  StandardDisconnectMethod,
  StandardEvents,
  StandardEventsFeature,
  StandardEventsListeners,
  StandardEventsNames,
  StandardEventsOnMethod
} from "@wallet-standard/features";
import { SolanaChain, isSolanaChain } from "./wallet/solana";
import MessageClient from "./wallet/message-client";
import { WalletRequestMethod } from "./types/messageTypes";
import { SafariExtensionDemoWalletAccount } from "./wallet/account";
import { icon } from "./wallet/icon";
let wallet: SafariExtensionDemoWallet;
let registered = false;

export function get(): Wallet {
  return (wallet ??= new SafariExtensionDemoWallet());
}

export function register(): boolean {
  try {
    if (registered) return true;

    const wallet = get();
    registerWallet(wallet);
    registered = true;
    return true;
  } catch (error) {
    // Silently catch and return false.
    console.error("Failed to register wallet");
  }
  return false;
}

/** @internal */
class SafariExtensionDemoWallet implements Wallet {
  // Custom State
  readonly #messageClient: MessageClient;

  // Wallet Standard
  readonly #name = "Safari Web Extension Wallet";
  readonly #version = "1.0.0" as const;
  readonly #icon = icon;
  readonly #listeners: {
    [E in StandardEventsNames]?: StandardEventsListeners[E][];
  } = {};
  #accounts: Wallet["accounts"] & readonly SafariExtensionDemoWalletAccount[] =
    [];
  #chains: Wallet["chains"] = [
    "solana:mainnet",
    "solana:devnet",
    "solana:testnet",
    "solana:localnet"
  ];

  get version() {
    return this.#version;
  }

  get name() {
    return this.#name;
  }

  get icon() {
    return this.#icon;
  }

  get accounts() {
    return this.#accounts.slice();
  }

  get chains() {
    return this.#chains.slice();
  }

  get features(): StandardConnectFeature &
    StandardDisconnectFeature &
    StandardEventsFeature &
    SolanaSignAndSendTransactionFeature &
    SolanaSignMessageFeature &
    SolanaSignInFeature &
    SolanaSignTransactionFeature {
    return {
      [StandardConnect]: {
        version: "1.0.0",
        connect: this.#standardConnect
      },
      [StandardDisconnect]: {
        version: "1.0.0",
        disconnect: this.#standardDisconnect
      },
      [StandardEvents]: {
        version: "1.0.0",
        on: this.#standardEventsOn
      },
      [SolanaSignAndSendTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signAndSendTransaction: this.#solanaSignAndSendTransaction
      },
      [SolanaSignIn]: {
        version: "1.0.0",
        signIn: this.#solanaSignIn
      },
      [SolanaSignMessage]: {
        version: "1.1.0",
        signMessage: this.#solanaSignMessage
      },
      [SolanaSignTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signTransaction: this.#solanaSignTransaction
      }
    };
  }

  constructor() {
    this.#messageClient = new MessageClient();
    if (new.target === SafariExtensionDemoWallet) {
      Object.freeze(this);
    }
  }

  #connected = (accounts: readonly WalletAccount[]) => {
    this.#accounts = accounts.map(
      (account) => new SafariExtensionDemoWalletAccount(account)
    );
    console.log(this.#accounts);
    this.#standardEventsEmit("change", { accounts: this.accounts });
  };

  #disconnected = () => {
    if (this.#accounts.length) {
      this.#accounts = [];
      this.#standardEventsEmit("change", { accounts: this.accounts });
    }
  };

  #standardEventsOn: StandardEventsOnMethod = <E extends StandardEventsNames>(
    event: E,
    listener: StandardEventsListeners[E]
  ) => {
    ((this.#listeners[event] ??= []) as StandardEventsListeners[E][]).push(
      listener
    );
    return () => this.#standardEventsOff(event, listener);
  };

  #standardEventsOff = <E extends StandardEventsNames>(
    event: E,
    listener: StandardEventsListeners[E]
  ) => {
    ((this.#listeners[event] ??= []) as StandardEventsListeners[E][]).filter(
      (existingListener) => listener !== existingListener
    );
  };

  #standardEventsEmit = <E extends StandardEventsNames>(
    event: E,
    ...args: Parameters<StandardEventsListeners[E]>
  ) => {
    ((this.#listeners[event] ??= []) as StandardEventsListeners[E][]).forEach(
      (listener) => {
        // eslint-disable-next-line @typescript-eslint/ban-types,prefer-spread
        (listener as Function).apply(null, args);
      }
    );
  };

  #standardConnect: StandardConnectMethod = async (input) => {
    if (!this.#accounts.length || !input?.silent) {
      const response = await this.#messageClient.sendWalletRequest({
        type: "page-wallet-request",
        requestId: Math.random().toString(36),
        method: WalletRequestMethod.SOLANA_CONNECT,
        input: input ?? { silent: false }
      });

      if (response?.error) {
        throw new Error(response.error.value);
      }

      this.#connected(response.output.accounts);
    }
    return { accounts: this.accounts };
  };

  #standardDisconnect: StandardDisconnectMethod = async () => {
    this.#disconnected();
  };

  #solanaSignAndSendTransaction: SolanaSignAndSendTransactionMethod = async (
    ...inputs
  ) => {
    if (!this.#accounts) throw new Error("not connected");

    const outputs: SolanaSignAndSendTransactionOutput[] = [];

    if (inputs.length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { transaction, account, chain, options } = inputs[0]!;
      const { minContextSlot, preflightCommitment, skipPreflight, maxRetries } =
        options || {};

      if (!this.#accounts.some((acc) => acc.address === account.address)) {
        throw new Error("invalid account");
      }

      if (!isSolanaChain(chain)) throw new Error("invalid chain");

      const response = await this.#messageClient.sendWalletRequest({
        type: "page-wallet-request",
        requestId: Math.random().toString(36),
        method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION,
        input: inputs[0]
      });

      if (response?.error) {
        throw new Error(response.error.value);
      }

      outputs.push(response.output);
    } else if (inputs.length > 1) {
      for (const input of inputs) {
        outputs.push(...(await this.#solanaSignAndSendTransaction(input)));
      }
    }

    return outputs;
  };

  #solanaSignIn: SolanaSignInMethod = async (...inputs) => {
    // TODO: Implement.
    const outputs = [] as SolanaSignInOutput[];
    return outputs;
  };

  #solanaSignMessage: SolanaSignMessageMethod = async (...inputs) => {
    if (!this.#accounts) throw new Error("not connected");

    const outputs: SolanaSignMessageOutput[] = [];

    if (inputs.length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { message, account } = inputs[0]!;

      if (!this.#accounts.some((acc) => acc.address === account.address)) {
        throw new Error("invalid account");
      }

      const response = await this.#messageClient.sendWalletRequest({
        type: "page-wallet-request",
        requestId: Math.random().toString(36),
        method: WalletRequestMethod.SOLANA_SIGN_MESSAGE,
        input: inputs[0]
      });

      if (response?.error) {
        throw new Error(response.error.value);
      }

      outputs.push(response.output);
    } else if (inputs.length > 1) {
      for (const input of inputs) {
        outputs.push(...(await this.#solanaSignMessage(input)));
      }
    }

    return outputs;
  };

  #solanaSignTransaction: SolanaSignTransactionMethod = async (...inputs) => {
    console.log("In Sign Transaction");
    if (!this.#accounts) throw new Error("not connected");

    const outputs: SolanaSignTransactionOutput[] = [];

    if (inputs.length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { transaction, account, chain } = inputs[0]!;
      if (!this.#accounts.some((acc) => acc.address === account.address)) {
        throw new Error("invalid account");
      }

      if (chain && !isSolanaChain(chain)) throw new Error("invalid chain");

      const response = await this.#messageClient.sendWalletRequest({
        type: "page-wallet-request",
        requestId: Math.random().toString(36),
        method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION,
        input: inputs[0]
      });

      if (response?.error) {
        throw new Error(response.error.value);
      }

      outputs.push(response.output);
    } else if (inputs.length > 1) {
      let chain: SolanaChain | undefined = undefined;
      for (const input of inputs) {
        if (
          !this.#accounts.some((acc) => acc.address === input.account.address)
        ) {
          throw new Error("invalid account");
        }
        if (input.chain) {
          if (!isSolanaChain(input.chain)) throw new Error("invalid chain");
          if (chain) {
            if (input.chain !== chain) throw new Error("conflicting chain");
          } else {
            chain = input.chain;
          }
        }
      }

      const signedTransactions = await Promise.all(
        inputs.map((input) => this.#solanaSignTransaction(input))
      );

      outputs.push(
        ...signedTransactions.map((singleSignedOutput) => singleSignedOutput[0])
      );
    }

    return outputs;
  };
}
