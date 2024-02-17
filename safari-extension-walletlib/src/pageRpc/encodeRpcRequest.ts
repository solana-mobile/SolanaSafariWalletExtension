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
  WalletAccountEncoded,
  WalletRequestInput,
  WalletRequestInputEncoded,
  WalletRequestMethod,
  WalletRpcRequest,
} from './requests';
import { WalletAccount } from '@wallet-standard/base';

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
    account: encodeWalletAccount(input.account),
    message: fromUint8Array(input.message), // Changed to Base64 encoding
  };
}

function encodeSignTransactionInput(
  input: SolanaSignTransactionInput
): SolanaSignTransactionInputEncoded {
  return {
    account: encodeWalletAccount(input.account),
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

function encodeWalletAccount(account: WalletAccount): WalletAccountEncoded {
  return {
    address: account.address,
    publicKey: fromUint8Array(account.publicKey), // Changed to Base64 encoding
    chains: account.chains,
    features: account.features,
    label: account.label,
    icon: account.icon,
  };
}
