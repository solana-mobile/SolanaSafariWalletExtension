import {
  SolanaSignMessageInput,
  SolanaSignTransactionInput,
  SolanaSignAndSendTransactionInput
} from "@solana/wallet-standard-features";
import * as bs58 from "bs58";
import {
  SolanaSignMessageInputEncoded,
  SolanaSignTransactionInputEncoded,
  SolanaSignAndSendTransactionInputEncoded,
  BaseWalletRequest,
  BaseWalletRequestEncoded,
  WalletRequestMethod,
  WalletRequestInput,
  WalletRequestInputEncoded
} from "../types/messageTypes";
import { StandardConnectInput } from "@wallet-standard/features";

export function encodeWalletRequest(
  request: BaseWalletRequest
): BaseWalletRequestEncoded {
  return {
    ...request,
    input: encodeInput(request.method, request.input)
  };
}

function encodeInput(
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
      publicKey: bs58.encode(input.account.publicKey)
    },
    message: bs58.encode(input.message)
  };
}

function encodeSignTransactionInput(
  input: SolanaSignTransactionInput
): SolanaSignTransactionInputEncoded {
  return {
    account: {
      ...input.account,
      publicKey: bs58.encode(input.account.publicKey)
    },
    transaction: bs58.encode(input.transaction),
    chain: input.chain,
    options: input.options
  };
}

function encodeSignAndSendTransactionInput(
  input: SolanaSignAndSendTransactionInput
): SolanaSignAndSendTransactionInputEncoded {
  return {
    ...encodeSignTransactionInput(input),
    chain: input.chain,
    options: input.options
  };
}
