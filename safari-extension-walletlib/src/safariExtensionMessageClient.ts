import {
  BaseWalletRequest,
  BaseWalletResponse,
  ConnectRequest,
  ConnectResponse,
  SignAndSendTransactionRequest,
  SignAndSendTransactionResponse,
  SignMessageRequest,
  SignMessageResponse,
  SignTransactionRequest,
  SignTransactionResponse,
  WalletRequestEvent,
  WalletResponseEvent,
} from './messages/walletMessage';
import { decodeWalletResponse } from './util/decodeWalletResponse';
import { encodeWalletRequest } from './util/encodeWalletRequest';

// Communicates from the page script to the content script.
export default class SafariExtensionMessageClient {
  #resolveHandler: {
    [key: string]: {
      resolve: (value?: any) => void;
      reject: (reason?: any) => void;
    };
  } = {};

  constructor() {
    window.addEventListener(
      WalletResponseEvent.EVENT_TYPE,
      this.#handleResponse.bind(this)
    );
  }

  // Handles wallet responses from content script.
  #handleResponse(event: Event) {
    const response = (event as WalletResponseEvent).detail;
    const requestId = response?.requestId;

    if (requestId && this.#resolveHandler[requestId]) {
      const { resolve, reject } = this.#resolveHandler[requestId];
      const decodedResponse = decodeWalletResponse(response);
      resolve(decodedResponse);
      delete this.#resolveHandler[requestId];
    }
  }

  async sendWalletRequest(request: ConnectRequest): Promise<ConnectResponse>;
  async sendWalletRequest(
    request: SignMessageRequest
  ): Promise<SignMessageResponse>;
  async sendWalletRequest(
    request: SignTransactionRequest
  ): Promise<SignTransactionResponse>;
  async sendWalletRequest(
    request: SignAndSendTransactionRequest
  ): Promise<SignAndSendTransactionResponse>;

  async sendWalletRequest(
    request: BaseWalletRequest
  ): Promise<BaseWalletResponse> {
    return new Promise<BaseWalletResponse>((resolve, reject) => {
      const walletRequest = new WalletRequestEvent(
        encodeWalletRequest(request)
      );

      this.#resolveHandler[request.requestId] = { resolve, reject };
      window.dispatchEvent(walletRequest);
    });
  }
}
