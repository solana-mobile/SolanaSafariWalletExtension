import * as bs58 from "bs58";
import {
  StandardConnectOutputEncoded,
  SolanaSignMessageOutputEncoded,
  SolanaSignTransactionOutputEncoded,
  SolanaSignAndSendTransactionOutputEncoded,
  BaseWalletResponse,
  BaseWalletResponseEncoded,
  WalletRequestMethod,
  WalletRequestOutputEncoded
} from "../types/messageTypes";
import {
  SolanaSignMessageOutput,
  SolanaSignTransactionOutput,
  SolanaSignAndSendTransactionOutput
} from "@solana/wallet-standard-features";
import { StandardConnectOutput } from "@wallet-standard/features";

export function decodeWalletResponse(
  response: BaseWalletResponseEncoded
): BaseWalletResponse {
  return {
    ...response,
    output: decodeOutput(response.method, response.output)
  };
}

function decodeOutput(
  method: WalletRequestMethod,
  encodedOutput: WalletRequestOutputEncoded
): any {
  switch (method) {
    case WalletRequestMethod.SOLANA_CONNECT:
      return decodeConnectOutput(encodedOutput as StandardConnectOutputEncoded);
    case WalletRequestMethod.SOLANA_SIGN_MESSAGE:
      return decodeSignMessageOutput(
        encodedOutput as SolanaSignMessageOutputEncoded
      );
    case WalletRequestMethod.SOLANA_SIGN_TRANSACTION:
      return decodeSignTransactionOutput(
        encodedOutput as SolanaSignTransactionOutputEncoded
      );
    case WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION:
      console.log("IN DECODE");
      console.log(encodedOutput);
      return decodeSignAndSendTransactionOutput(
        encodedOutput as SolanaSignAndSendTransactionOutputEncoded
      );
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
}

function decodeConnectOutput(
  encodedOutput: StandardConnectOutputEncoded
): StandardConnectOutput {
  return {
    accounts: encodedOutput.accounts.map((account) => ({
      ...account,
      publicKey: bs58.decode(account.publicKey)
    }))
  };
}

function decodeSignMessageOutput(
  encodedOutput: SolanaSignMessageOutputEncoded
): SolanaSignMessageOutput {
  return {
    signedMessage: bs58.decode(encodedOutput.signedMessage),
    signature: bs58.decode(encodedOutput.signature),
    signatureType: encodedOutput.signatureType
  };
}

function decodeSignTransactionOutput(
  encodedOutput: SolanaSignTransactionOutputEncoded
): SolanaSignTransactionOutput {
  return {
    signedTransaction: bs58.decode(encodedOutput.signedTransaction)
  };
}

function decodeSignAndSendTransactionOutput(
  encodedOutput: SolanaSignAndSendTransactionOutputEncoded
): SolanaSignAndSendTransactionOutput {
  return {
    signature: bs58.decode(encodedOutput.signature)
  };
}
