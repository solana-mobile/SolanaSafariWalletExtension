import { v4 } from 'uuid';
import {
  RpcResponse,
  SolanaSignAndSendTransactionOutputEncoded,
  SolanaSignMessageOutputEncoded,
  SolanaSignTransactionOutputEncoded,
  StandardConnectOutputEncoded,
  WalletRequestMethod,
  WalletRequestOutput,
  WalletRequestOutputEncoded,
  WalletRpcRequest,
} from './pageRpc/requests';
import { encodeWalletRpcParams } from './pageRpc/encodeRpcRequest';
import {
  PAGE_WALLET_REQUEST_CHANNEL,
  PAGE_WALLET_RESPONSE_CHANNEL,
} from './constants';
import {
  StandardConnectInput,
  StandardConnectOutput,
} from '@wallet-standard/features';
import {
  SolanaSignAndSendTransactionInput,
  SolanaSignAndSendTransactionOutput,
  SolanaSignMessageInput,
  SolanaSignMessageOutput,
  SolanaSignTransactionInput,
  SolanaSignTransactionOutput,
} from '@solana/wallet-standard-features';
import {
  decodeConnectOutput,
  decodeSignAndSendTransactionOutput,
  decodeSignMessageOutput,
  decodeSignTransactionOutput,
} from './pageRpc/decodeRpcResponse';

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
    window.addEventListener(
      PAGE_WALLET_RESPONSE_CHANNEL,
      this.#handleResponse.bind(this)
    );
  }

  // Handles wallet responses from content script.
  #handleResponse(event: any) {
    if (!isValidOrigin(event)) return;

    if (event.data.type !== PAGE_WALLET_RESPONSE_CHANNEL) return;

    const { id, result, error } = event.data.detail;
    const resolver = this.#resolveHandler[id];

    if (!resolver) {
      console.error('unexpected event', event);
      return;
    }

    delete this.#resolveHandler[id];

    const { resolve, reject } = resolver;
    if (error) {
      reject(new Error(error));
    } else {
      resolve(result);
    }
  }

  async sendConnectRequest(
    input: StandardConnectInput
  ): Promise<StandardConnectOutput> {
    const rpcResponse = await this.sendRpcRequest<StandardConnectOutputEncoded>(
      {
        method: WalletRequestMethod.SOLANA_CONNECT,
        params: input,
      }
    );
    if (rpcResponse.error || !rpcResponse.result) {
      throw Error('Error during connect');
    }
    return decodeConnectOutput(rpcResponse.result);
  }

  async sendSignMessageRequest(
    input: SolanaSignMessageInput
  ): Promise<SolanaSignMessageOutput> {
    const rpcResponse =
      await this.sendRpcRequest<SolanaSignMessageOutputEncoded>({
        method: WalletRequestMethod.SOLANA_SIGN_MESSAGE,
        params: input,
      });
    if (rpcResponse.error || !rpcResponse.result) {
      throw Error('Error during signing');
    }
    return decodeSignMessageOutput(rpcResponse.result);
  }

  async sendSignAndSendTransactionRequest(
    input: SolanaSignAndSendTransactionInput
  ): Promise<SolanaSignAndSendTransactionOutput> {
    const rpcResponse =
      await this.sendRpcRequest<SolanaSignAndSendTransactionOutputEncoded>({
        method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION,
        params: input,
      });
    if (rpcResponse.error || !rpcResponse.result) {
      throw Error('Error during signing');
    }
    return decodeSignAndSendTransactionOutput(rpcResponse.result);
  }

  async sendSignTransactionRequest(
    input: SolanaSignTransactionInput
  ): Promise<SolanaSignTransactionOutput> {
    const rpcResponse =
      await this.sendRpcRequest<SolanaSignTransactionOutputEncoded>({
        method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION,
        params: input,
      });
    if (rpcResponse.error || !rpcResponse.result) {
      throw Error('Error during signing');
    }
    return decodeSignTransactionOutput(rpcResponse.result);
  }

  async sendRpcRequest<T extends WalletRequestOutputEncoded = any>({
    method,
    params,
  }: WalletRpcRequest): Promise<RpcResponse<T>> {
    return new Promise<RpcResponse<T>>((resolve, reject) => {
      const id = v4();
      this.#resolveHandler[id] = {
        resolve,
        reject,
      };
      window.postMessage({
        type: PAGE_WALLET_REQUEST_CHANNEL,
        detail: {
          id,
          method,
          params: encodeWalletRpcParams(method, params),
        },
      });
    });
  }
}
