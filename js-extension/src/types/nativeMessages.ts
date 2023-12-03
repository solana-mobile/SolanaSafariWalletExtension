import {
  SolanaSignMessageInputEncoded,
  WalletRequestMethod
} from "./messageTypes";

export interface NativeConnectRequest {
  type: "native-connect-request";
  method: WalletRequestMethod.SOLANA_CONNECT;
  input: SolanaSignMessageInputEncoded;
}

export interface NativeSignMessageRequest {
  type: "native-sign-message";
  method: WalletRequestMethod.SOLANA_SIGN_MESSAGE;
  input: SolanaSignMessageInputEncoded;
}

export interface NativeSignTransactionRequest {
  type: "native-sign-transaction";
  method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION;
  input: SolanaSignMessageInputEncoded;
}
