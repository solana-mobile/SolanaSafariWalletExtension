import {ReadonlyWalletAccount, registerWallet} from "@wallet-standard/wallet";
import {
  SolanaSignAndSendTransaction,
  SolanaSignIn,
  SolanaSignMessage,
  SolanaSignTransaction
} from "@solana/wallet-standard-features";
import {
  StandardConnect,
  StandardDisconnect,
  StandardEvents
} from "@wallet-standard/features";
let wallet;
let registered = false;
export function get() {
  return wallet ??= new MyWallet();
}
export function register() {
  try {
    if (registered)
      return true;
    const wallet2 = get();
    console.log("in register");
    console.log(wallet2);
    registerWallet(wallet2);
    registered = true;
    return true;
  } catch (error) {
    console.error("Failed to register wallet");
  }
  return false;
}
const icon = "data:image/svg+xml;base64,";
class MyWalletAccount extends ReadonlyWalletAccount {
  constructor(account) {
    super(account);
    if (new.target === MyWalletAccount) {
      Object.freeze(this);
    }
  }
}
class MyWallet {
  constructor() {
    this.#name = "My Wallet";
    this.#version = "1.0.0";
    this.#icon = icon;
    this.#listeners = {};
    this.#accounts = [];
    this.#chains = [
      "solana:mainnet",
      "solana:devnet",
      "solana:testnet",
      "solana:localnet"
    ];
    this.#connected = (accounts) => {
      console.log("connected");
      this.#accounts = accounts.map((account) => new MyWalletAccount(account));
      this.#standardEventsEmit("change", {accounts: this.accounts});
    };
    this.#disconnected = () => {
      console.log("disconnected");
      if (this.#accounts.length) {
        this.#accounts = [];
        this.#standardEventsEmit("change", {accounts: this.accounts});
      }
    };
    this.#standardEventsOn = (event, listener) => {
      console.log("Events listener push");
      (this.#listeners[event] ??= []).push(listener);
      return () => this.#standardEventsOff(event, listener);
    };
    this.#standardEventsOff = (event, listener) => {
      console.log("Events listener off");
      (this.#listeners[event] ??= []).filter((existingListener) => listener !== existingListener);
    };
    this.#standardEventsEmit = (event, ...args) => {
      console.log("In emitt");
      (this.#listeners[event] ??= []).forEach((listener) => listener.apply(null, args));
    };
    this.#standardConnect = async (input) => {
      console.log("In connect");
      if (!this.#accounts.length || !input?.silent) {
        const accounts = [];
        this.#connected(accounts);
      }
      return {accounts: this.accounts};
    };
    this.#standardDisconnect = async () => {
      console.log("std disconnect");
      this.#disconnected();
    };
    this.#solanaSignAndSendTransaction = async (...inputs) => {
      const outputs = [];
      return outputs;
    };
    this.#solanaSignIn = async (...inputs) => {
      const outputs = [];
      return outputs;
    };
    this.#solanaSignMessage = async (...inputs) => {
      const outputs = [];
      return outputs;
    };
    this.#solanaSignTransaction = async (...inputs) => {
      const outputs = [];
      return outputs;
    };
    console.log("constructed");
    if (new.target === MyWallet) {
      Object.freeze(this);
    }
  }
  #name;
  #version;
  #icon;
  #listeners;
  #accounts;
  #chains;
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
  get features() {
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
  #connected;
  #disconnected;
  #standardEventsOn;
  #standardEventsOff;
  #standardEventsEmit;
  #standardConnect;
  #standardDisconnect;
  #solanaSignAndSendTransaction;
  #solanaSignIn;
  #solanaSignMessage;
  #solanaSignTransaction;
}
