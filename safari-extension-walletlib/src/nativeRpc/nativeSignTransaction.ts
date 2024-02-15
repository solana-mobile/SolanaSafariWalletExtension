import { toUint8Array } from 'js-base64';
import {
  NativeSignTransactionResult,
  NativeSignTransactionParams,
} from './types';

const NATIVE_SIGN_TRANSACTIONS_RPC_METHOD = 'NATIVE_SIGN_TRANSACTIONS_METHOD';

function parseSignTransactionResponse(
  rpcResult: any
): NativeSignTransactionResult {
  const signTransactionsResult = JSON.parse(rpcResult);

  if (
    signTransactionsResult?.signed_transactions ||
    !Array.isArray(signTransactionsResult.signed_transactions) ||
    !signTransactionsResult.signed_transactions.every(
      (item: any) => typeof item === 'string'
    )
  ) {
    throw new Error('Invalid SignTransactions result format');
  }

  const decoded = (signTransactionsResult.signed_transactions as string[]).map(
    tx => toUint8Array(tx)
  );

  return { signed_transactions: decoded };
}

export async function nativeSignTransaction({
  address,
  transaction,
  extra_data,
}: NativeSignTransactionParams): Promise<NativeSignTransactionResult> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: NATIVE_SIGN_TRANSACTIONS_RPC_METHOD,
    params: {
      address,
      transaction,
      extra_data,
    },
  });

  console.log('Native Sign Transaction Response: ', response);

  return parseSignTransactionResponse(response);
}
