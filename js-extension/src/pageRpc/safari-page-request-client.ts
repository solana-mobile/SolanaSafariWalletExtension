import { v4 } from "uuid";
import { WalletRequestMethod, WalletRpcRequest } from "./requests";
import { encodeWalletRpcParams } from "./encodeRpcRequest";
import {
  PAGE_WALLET_REQUEST_CHANNEL,
  PAGE_WALLET_RESPONSE_CHANNEL
} from "./constants";
import {
  StandardConnectInput,
  StandardConnectOutput
} from "@wallet-standard/features";
import {
  SolanaSignAndSendTransactionInput,
  SolanaSignAndSendTransactionOutput,
  SolanaSignMessageInput,
  SolanaSignMessageOutput,
  SolanaSignTransactionInput,
  SolanaSignTransactionOutput
} from "@solana/wallet-standard-features";
import {
  decodeConnectOutput,
  decodeSignAndSendTransactionOutput,
  decodeSignMessageOutput,
  decodeSignTransactionOutput
} from "./decodeRpcResponse";

function isValidOrigin(event: any) {
  return event.source === window && event.origin === window.location.origin;
}

// Manages requests originating from the page script to the content script
export default class SafariPageRequestClient {
  #resolveHandler: {
    [key: string]: {
      resolve: (value?: any) => void;
      reject: (reason?: any) => void;
    };
  } = {};

  constructor() {
    window.addEventListener("message", this.#handleResponse.bind(this));
  }

  // Handles wallet responses from content script.
  #handleResponse(event: any) {
    console.log("Page Request Client received response:");
    console.log(event);
    if (!isValidOrigin(event)) return;

    if (event.data.type !== PAGE_WALLET_RESPONSE_CHANNEL) return;

    const { id, result, error } = event.data.detail;
    const resolver = this.#resolveHandler[id];

    if (!resolver) {
      console.error("unexpected event", event);
      return;
    }

    const { resolve, reject } = resolver;

    delete this.#resolveHandler[id];

    if (error) {
      console.log("In error");
      reject(new Error(error));
    } else {
      console.log("In resolve");
      resolve(result);
    }
  }

  async popupRequest() {
    const rpcResponse = await this.sendRpcRequest({
      method: WalletRequestMethod.POPUP,
      params: {}
    });
  }

  async sendConnectRequest(
    input: StandardConnectInput
  ): Promise<StandardConnectOutput> {
    const rpcResponse = await this.sendRpcRequest({
      method: WalletRequestMethod.SOLANA_CONNECT,
      params: input
    });

    return decodeConnectOutput(rpcResponse);
  }

  async sendSignMessageRequest(
    input: SolanaSignMessageInput
  ): Promise<SolanaSignMessageOutput> {
    const rpcResponse = await this.sendRpcRequest({
      method: WalletRequestMethod.SOLANA_SIGN_MESSAGE,
      params: input
    });

    return decodeSignMessageOutput(rpcResponse);
  }

  async sendSignAndSendTransactionRequest(
    input: SolanaSignAndSendTransactionInput
  ): Promise<SolanaSignAndSendTransactionOutput> {
    const rpcResponse = await this.sendRpcRequest({
      method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION,
      params: input
    });

    return decodeSignAndSendTransactionOutput(rpcResponse);
  }

  async sendSignTransactionRequest(
    input: SolanaSignTransactionInput
  ): Promise<SolanaSignTransactionOutput> {
    const rpcResponse = await this.sendRpcRequest({
      method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION,
      params: input
    });

    return decodeSignTransactionOutput(rpcResponse);
  }

  async sendRpcRequest({ method, params }: WalletRpcRequest): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const id = v4();
      this.#resolveHandler[id] = {
        resolve,
        reject
      };
      const encodedParams = encodeWalletRpcParams(method, params);
      console.log("encodedParams: ");
      console.log(encodedParams);
      window.postMessage({
        type: PAGE_WALLET_REQUEST_CHANNEL,
        detail: {
          id,
          method,
          params: encodeWalletRpcParams(method, params)
        }
      });
    });
  }
}
