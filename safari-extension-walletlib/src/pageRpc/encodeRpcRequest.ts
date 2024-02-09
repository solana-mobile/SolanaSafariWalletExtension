import {
  SolanaSignMessageInput,
  SolanaSignTransactionInput,
  SolanaSignAndSendTransactionInput,
} from '@solana/wallet-standard-features';
import { fromUint8Array } from 'js-base64';
import { StandardConnectInput } from '@wallet-standard/features';
import {
  SolanaSignAndSendTransactionInputEncoded,
  SolanaSignMessageInputEncoded,
  SolanaSignTransactionInputEncoded,
  WalletRequestInput,
  WalletRequestInputEncoded,
  WalletRequestMethod,
  WalletRpcRequest,
} from './requests';

export function encodeWalletRpcRequest(request: WalletRpcRequest): any {
  return {
    ...request,
    params: encodeWalletRpcParams(request.method, request.params),
  };
}

export function encodeWalletRpcParams(
  method: WalletRequestMethod,
  input: WalletRequestInput
): WalletRequestInputEncoded {
  switch (method) {
    case WalletRequestMethod.SOLANA_CONNECT:
      return input as StandardConnectInput;
    case WalletRequestMethod.SOLANA_SIGN_MESSAGE:
      return encodeSignMessageInput(input as SolanaSignMessageInput);
    case WalletRequestMethod.SOLANA_SIGN_TRANSACTION:
      return encodeSignTransactionInput(input as SolanaSignTransactionInput);
    case WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION:
      return encodeSignAndSendTransactionInput(
        input as SolanaSignAndSendTransactionInput
      );
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
}

function encodeSignMessageInput(
  input: SolanaSignMessageInput
): SolanaSignMessageInputEncoded {
  return {
    account: {
      ...input.account,
      publicKey: fromUint8Array(input.account.publicKey), // Changed to Base64 encoding
    },
    message: fromUint8Array(input.message), // Changed to Base64 encoding
  };
}

function encodeSignTransactionInput(
  input: SolanaSignTransactionInput
): SolanaSignTransactionInputEncoded {
  return {
    account: {
      ...input.account,
      publicKey: fromUint8Array(input.account.publicKey), // Changed to Base64 encoding
    },
    transaction: fromUint8Array(input.transaction), // Changed to Base64 encoding
    chain: input.chain,
    options: input.options,
  };
}

function encodeSignAndSendTransactionInput(
  input: SolanaSignAndSendTransactionInput
): SolanaSignAndSendTransactionInputEncoded {
  // Utilizes the above encodeSignTransactionInput method, assuming it already returns the correct Base64 encoded structure
  return {
    ...encodeSignTransactionInput(input),
    chain: input.chain,
    options: input.options,
  };
}
