import {
  SolanaSignAndSendTransactionInput,
  SolanaSignAndSendTransactionOptions,
  SolanaSignAndSendTransactionOutput,
  SolanaSignMessageInput,
  SolanaSignMessageOutput,
  SolanaSignTransactionInput,
  SolanaSignTransactionOptions,
  SolanaSignTransactionOutput,
} from '@solana/wallet-standard-features';
import { IdentifierString, WalletAccount } from '@wallet-standard/base';
import {
  StandardConnectInput,
  StandardConnectOutput,
} from '@wallet-standard/features';

export enum WalletRequestMethod {
  SOLANA_CONNECT = 'SOLANA_CONNECT',
  SOLANA_SIGN_MESSAGE = 'SOLANA_SIGN_MESSAGE',
  SOLANA_SIGN_TRANSACTION = 'SOLANA_SIGN_TRANSACTION',
  SOLANA_SIGN_AND_SEND_TRANSACTION = 'SOLANA_SIGN_AND_SEND_TRANSACTION',
}

export class WalletRequestEvent extends CustomEvent<BaseWalletRequestEncoded> {
  constructor(request: BaseWalletRequestEncoded) {
    super('page-wallet-request', { detail: request });
  }
}

export class WalletResponseEvent extends CustomEvent<BaseWalletResponseEncoded> {
  constructor(detail: BaseWalletResponseEncoded) {
    super('wallet-response', { detail });
  }
}

export type WalletRequestInput =
  | StandardConnectInput
  | SolanaSignMessageInput
  | SolanaSignTransactionInput
  | SolanaSignAndSendTransactionInput;

export type WalletRequestInputEncoded =
  | StandardConnectInput
  | SolanaSignMessageInputEncoded
  | SolanaSignTransactionInputEncoded
  | SolanaSignAndSendTransactionInputEncoded;

export type WalletRequestOutput =
  | StandardConnectOutput
  | SolanaSignMessageOutput
  | SolanaSignTransactionOutput
  | SolanaSignAndSendTransactionOutput;

export type WalletRequestOutputEncoded =
  | StandardConnectOutputEncoded
  | SolanaSignMessageOutputEncoded
  | SolanaSignTransactionOutputEncoded
  | SolanaSignAndSendTransactionOutputEncoded;

export interface BaseWalletRequest {
  type: string;
  requestId: string;
  method: WalletRequestMethod;
  input: WalletRequestInput;
  origin?: browser.runtime.MessageSender;
}

export interface BaseWalletRequestEncoded {
  type: string;
  requestId: string;
  method: WalletRequestMethod;
  input: WalletRequestInputEncoded;
  origin?: browser.runtime.MessageSender;
}

export interface BaseWalletResponse {
  type: string;
  requestId: string;
  method: WalletRequestMethod;
  output: WalletRequestOutput;
  origin: browser.runtime.MessageSender;
  error?: {
    value: string;
  };
}

export interface BaseWalletResponseEncoded {
  type: string;
  requestId: string;
  method: WalletRequestMethod;
  output: WalletRequestOutputEncoded;
  origin: browser.runtime.MessageSender;
  error?: {
    value: string;
  };
}

/**
 * Connect
 */

export interface ConnectRequest extends BaseWalletRequest {
  input: StandardConnectInput;
  method: WalletRequestMethod.SOLANA_CONNECT;
}

export interface ConnectResponse extends BaseWalletResponse {
  output: StandardConnectOutput;
  method: WalletRequestMethod.SOLANA_CONNECT;
}

export interface ConnectResponseEncoded extends BaseWalletResponseEncoded {
  output: StandardConnectOutputEncoded;
  method: WalletRequestMethod.SOLANA_CONNECT;
}

export type WalletAccountEncoded = Omit<WalletAccount, 'publicKey'> & {
  publicKey: string;
};

export interface ConnectResponseEncoded extends BaseWalletResponseEncoded {
  output: StandardConnectOutputEncoded;
  method: WalletRequestMethod.SOLANA_CONNECT;
}

export interface StandardConnectOutputEncoded {
  readonly accounts: readonly WalletAccountEncoded[];
}

/**
 * Sign Message
 */

export interface SignMessageRequest extends BaseWalletRequest {
  input: SolanaSignMessageInput;
  method: WalletRequestMethod.SOLANA_SIGN_MESSAGE;
}

export interface SignMessageRequestEncoded extends BaseWalletRequestEncoded {
  input: SolanaSignMessageInputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_MESSAGE;
}

export interface SolanaSignMessageInputEncoded {
  readonly account: WalletAccountEncoded;
  readonly message: string; // Originally Uint8Array, now a string to represent bs58 encoding
}

export interface SignMessageResponseEncoded extends BaseWalletResponseEncoded {
  output: SolanaSignMessageOutputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_MESSAGE;
}

export interface SignMessageResponse extends BaseWalletResponse {
  output: SolanaSignMessageOutput;
  method: WalletRequestMethod.SOLANA_SIGN_MESSAGE;
}

export interface SolanaSignMessageOutputEncoded {
  readonly signedMessage: string;
  readonly signature: string;
  readonly signatureType?: 'ed25519';
}

/**
 * Sign Transaction
 */

export interface SignTransactionRequestEncoded
  extends BaseWalletRequestEncoded {
  input: SolanaSignTransactionInputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION;
}

export interface SignTransactionRequest extends BaseWalletRequest {
  input: SolanaSignTransactionInput;
  method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION;
}

export interface SolanaSignTransactionInputEncoded {
  readonly account: WalletAccountEncoded;
  readonly transaction: string; // Originally Uint8Array, now a string to represent bs58 encoding
  readonly chain?: IdentifierString;
  readonly options?: SolanaSignTransactionOptions;
}

export interface SignTransactionResponseEncoded
  extends BaseWalletResponseEncoded {
  output: SolanaSignTransactionOutputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION;
}

export interface SignTransactionResponse extends BaseWalletResponse {
  output: SolanaSignTransactionOutput;
  method: WalletRequestMethod.SOLANA_SIGN_TRANSACTION;
}

export interface SolanaSignTransactionOutputEncoded {
  readonly signedTransaction: string;
}

/**
 * Sign And Send Transaction
 */

export interface SignAndSendTransactionRequestEncoded
  extends BaseWalletRequestEncoded {
  input: SolanaSignAndSendTransactionInputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION;
}

export interface SignAndSendTransactionRequest extends BaseWalletRequest {
  input: SolanaSignAndSendTransactionInput;
  method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION;
}

export interface SolanaSignAndSendTransactionInputEncoded
  extends SolanaSignTransactionInputEncoded {
  readonly chain: IdentifierString;
  readonly options?: SolanaSignAndSendTransactionOptions;
}

export interface SignAndSendTransactionResponseEncoded
  extends BaseWalletResponseEncoded {
  output: SolanaSignAndSendTransactionOutputEncoded;
  method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION;
}

export interface SignAndSendTransactionResponse extends BaseWalletResponse {
  output: SolanaSignAndSendTransactionOutput;
  method: WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION;
}

export interface SolanaSignAndSendTransactionOutputEncoded {
  readonly signature: string;
}
