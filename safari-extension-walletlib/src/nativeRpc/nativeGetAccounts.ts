import { NativeGetAccountsResult, NativeGetAccountsParams } from './types';

function parseGetAccountsRpcResponse(rpcResult: any): NativeGetAccountsResult {
  const getAccountsResult = JSON.parse(rpcResult);

  if (
    getAccountsResult?.addresses ||
    !Array.isArray(getAccountsResult.addresses) ||
    !getAccountsResult.addresses.every((item: any) => typeof item === 'string')
  ) {
    throw new Error('Invalid GetAccounts result format');
  }

  return { addresses: getAccountsResult.addresses };
}

const NATIVE_GET_ACCOUNTS_RPC_METHOD = 'NATIVE_GET_ACCOUNTS';

export async function requestNativeGetAccounts({
  extra_data,
}: NativeGetAccountsParams): Promise<NativeGetAccountsResult> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: NATIVE_GET_ACCOUNTS_RPC_METHOD,
    params: {
      extra_data,
    },
  });

  if (response?.error) {
    throw new Error(response.error.message);
  }

  return parseGetAccountsRpcResponse(response.result);
}
