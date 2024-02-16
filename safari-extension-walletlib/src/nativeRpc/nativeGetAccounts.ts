import { sendNativeRpcRequest } from './sendNativeRpcRequest';
import { Base58EncodedAddress, JSONObject, NativeRpcResponse } from './types';

/* Get Accounts */
export type NativeGetAccountsParams = {
  extra_data?: Record<string, JSONObject>;
};

export type NativeGetAccountsResult = {
  addresses: Base58EncodedAddress[];
};

export const NATIVE_GET_ACCOUNTS_RPC_METHOD = 'NATIVE_GET_ACCOUNTS_METHOD';

// Basic JSON schema validation
function isValidNativeGetAccountsResult(
  obj: any
): obj is NativeGetAccountsResult {
  return (
    Array.isArray(obj.addresses) &&
    obj.addresses.every((addr: any) => typeof addr === 'string')
  );
}

export async function sendNativeGetAccountsRequest({
  extra_data = {},
}: NativeGetAccountsParams = {}): Promise<NativeGetAccountsResult> {
  const nativeResponse: NativeRpcResponse = await sendNativeRpcRequest({
    method: NATIVE_GET_ACCOUNTS_RPC_METHOD,
    params: {
      extra_data,
    },
  });

  if (nativeResponse.result) {
    const resultObj = JSON.parse(nativeResponse.result);
    if (isValidNativeGetAccountsResult(resultObj)) {
      return resultObj;
    } else {
      throw new Error(
        'Response does not match the NativeGetAccountsResult structure.'
      );
    }
  } else {
    throw new Error(nativeResponse.error?.message ?? 'Invalid RPC Response');
  }
}
