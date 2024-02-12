export type Base64EncodedAddress = string;
export type Base64EncodedTransaction = string;
export type Base64EncodedMessage = string;
export type Base58EncodedAddress = string;
export type Base64EncodedPayload = string;
export type Base64EncodedSignedPayload = string;

/* Get Accounts */
export type NativeGetAccountsParams = {
  extra_data?: any;
};
export type NativeGetAccountsResult = {
  addresses: Base58EncodedAddress[];
};

/* Sign Transaction */
export type NativeSignTransactionParams = {
  address: Base64EncodedAddress;
  transaction: Base64EncodedTransaction;
  extra_data?: any;
};
export type NativeSignTransactionResult = {
  signed_transactions: Uint8Array[];
};

/* Sign Messages */
export type NativeSignMessagesParams = {
  address: Base64EncodedAddress;
  messages: Base64EncodedMessage[];
  extra_data?: any;
};

export type NativeSignMessagesResult = {
  signed_messages: Uint8Array[];
};

/* Sign Payloads */
export type NativeSignPayloadsParams = {
  address: Base64EncodedAddress;
  payloads: Base64EncodedPayload[];
  extra_data?: any;
};

export type NativeSignPayloadsResult = {
  signed_payloads: Uint8Array[];
};
