import {
  SignMessageResponseEncoded,
  SignTransactionResponseEncoded
} from "../types/messageTypes";
import {
  NativeConnectRequest,
  NativeSignMessageRequest,
  NativeSignTransactionRequest
} from "../types/nativeMessages";

export function requestNativeConnect(
  request: NativeConnectRequest
): SignMessageResponseEncoded | null {
  return null;
}

export function requestNativeSignMessage(
  request: NativeSignMessageRequest
): SignMessageResponseEncoded | null {
  return null;
}

export function requestNativeSignTransaction(
  request: NativeSignTransactionRequest
): SignTransactionResponseEncoded | null {
  return null;
}
