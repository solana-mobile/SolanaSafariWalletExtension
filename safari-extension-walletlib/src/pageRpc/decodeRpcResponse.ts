import { toUint8Array } from 'js-base64';
import {
  SolanaSignMessageOutput,
  SolanaSignTransactionOutput,
  SolanaSignAndSendTransactionOutput,
} from '@solana/wallet-standard-features';
import { StandardConnectOutput } from '@wallet-standard/features';
import {
  SolanaSignAndSendTransactionOutputEncoded,
  SolanaSignMessageOutputEncoded,
  SolanaSignTransactionOutputEncoded,
  StandardConnectOutputEncoded,
  WalletRequestMethod,
  WalletRequestOutput,
  WalletRequestOutputEncoded,
} from './requests';

export function decodeWalletRpcResult(
  method: WalletRequestMethod,
  encodedOutput: WalletRequestOutputEncoded
): WalletRequestOutput {
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
      return decodeSignAndSendTransactionOutput(
        encodedOutput as SolanaSignAndSendTransactionOutputEncoded
      );
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
}

export function decodeConnectOutput(
  encodedOutput: StandardConnectOutputEncoded
): StandardConnectOutput {
  return {
    accounts: encodedOutput.accounts.map(account => ({
      ...account,
      publicKey: toUint8Array(account.publicKey),
    })),
  };
}

export function decodeSignMessageOutput(
  encodedOutput: SolanaSignMessageOutputEncoded
): SolanaSignMessageOutput {
  return {
    signedMessage: toUint8Array(encodedOutput.signedMessage),
    signature: toUint8Array(encodedOutput.signature),
    signatureType: encodedOutput.signatureType,
  };
}

export function decodeSignTransactionOutput(
  encodedOutput: SolanaSignTransactionOutputEncoded
): SolanaSignTransactionOutput {
  return {
    signedTransaction: toUint8Array(encodedOutput.signedTransaction),
  };
}

export function decodeSignAndSendTransactionOutput(
  encodedOutput: SolanaSignAndSendTransactionOutputEncoded
): SolanaSignAndSendTransactionOutput {
  return {
    signature: toUint8Array(encodedOutput.signature),
  };
}
