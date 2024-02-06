import { SignTransactionRequestEncoded } from '../types/messageTypes';
import { toUint8Array, fromUint8Array } from 'js-base64';

type Base58SignedTransaction = string;

function parseSignTransactionResponse(
  response: any
): Base58SignedTransaction | null {
  if (!response.value || typeof response.value !== 'string') {
    return null;
  }
  return response.value as Base58SignedTransaction;
}

export async function requestNativeSignTransaction(
  request: SignTransactionRequestEncoded
): Promise<Base58SignedTransaction | null> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: request.method,
    input: {
      // fallback to address if publicKey not provided
      account: request.input.account.publicKey ?? request.input.account.address,
      transaction: request.input.transaction,
    },
  });
  console.log('Native Sign Transaction Response: ', response);

  return parseSignTransactionResponse(response);
}

type NativeSignTransactionParams = {
  account: Uint8Array;
  transaction: Uint8Array;
};

export async function nativeSignTransaction({
  account,
  transaction,
}: NativeSignTransactionParams): Promise<Base58SignedTransaction | null> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: 'NATIVE_SIGN_TRANSACTION',
    input: {
      // fallback to address if publicKey not provided
      account: fromUint8Array(account),
      transaction: fromUint8Array(transaction),
    },
  });
  console.log('Native Sign Transaction Response: ', response);

  return parseSignTransactionResponse(response);
}
