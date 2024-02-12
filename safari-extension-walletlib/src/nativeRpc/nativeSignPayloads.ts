import { toUint8Array } from 'js-base64';
import { NativeSignPayloadsResult, NativeSignPayloadsParams } from './types';

const NATIVE_SIGN_PAYLOADS_RPC_METHOD = 'NATIVE_SIGN_PAYLOADS';

function parseSignPayloadsResponse(rpcResult: any): NativeSignPayloadsResult {
  const signPayloadsResult = JSON.parse(rpcResult);

  if (
    signPayloadsResult?.signedPayloads ||
    !Array.isArray(signPayloadsResult.signedPayloads) ||
    !signPayloadsResult.signedPayloads.every(
      (item: any) => typeof item === 'string'
    )
  ) {
    throw new Error('Invalid SignPayloads result format');
  }

  const decoded = (signPayloadsResult.signedPayloads as string[]).map(message =>
    toUint8Array(message)
  );

  return { signed_payloads: decoded };
}

export async function nativeSignPayloads({
  address,
  payloads,
  extra_data,
}: NativeSignPayloadsParams): Promise<NativeSignPayloadsResult> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: NATIVE_SIGN_PAYLOADS_RPC_METHOD,
    params: {
      address,
      payloads,
      extra_data,
    },
  });
  console.log('Native Sign Payloads Response: ', response);

  if (response?.error) {
    throw new Error(response.error.message);
  }

  return parseSignPayloadsResponse(response.result);
}
