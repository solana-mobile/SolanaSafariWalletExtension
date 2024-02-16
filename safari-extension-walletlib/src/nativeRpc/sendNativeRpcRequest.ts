import { NativeRpcRequest, NativeRpcResponse } from './types';

export async function sendNativeRpcRequest({
  method,
  params,
}: NativeRpcRequest): Promise<NativeRpcResponse> {
  const request = {
    method: method,
    params: JSON.stringify(params),
  };

  try {
    return await browser.runtime.sendNativeMessage('id', request);
  } catch (error) {
    console.error('RPC request failed:', error);
    throw error;
  }
}
