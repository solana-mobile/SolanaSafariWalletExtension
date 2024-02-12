import { toUint8Array } from 'js-base64';
import { NativeSignMessagesResult, NativeSignMessagesParams } from './types';

const NATIVE_SIGN_MESSAGES_RPC_METHOD = 'NATIVE_SIGN_MESSAGES';

function parseSignMessageResponse(rpcResult: any): NativeSignMessagesResult {
  const signMessagesResult = JSON.parse(rpcResult);

  if (
    signMessagesResult?.signedMessages ||
    !Array.isArray(signMessagesResult.signedMessages) ||
    !signMessagesResult.signedMessages.every(
      (item: any) => typeof item === 'string'
    )
  ) {
    throw new Error('Invalid SignMessages result format');
  }

  const decoded = (signMessagesResult.signedMessages as string[]).map(message =>
    toUint8Array(message)
  );

  return { signed_messages: decoded };
}

export async function nativeSignMessage({
  address,
  messages,
  extra_data,
}: NativeSignMessagesParams): Promise<NativeSignMessagesResult> {
  const response = await browser.runtime.sendNativeMessage('id', {
    method: NATIVE_SIGN_MESSAGES_RPC_METHOD,
    params: {
      address,
      messages,
      extra_data,
    },
  });
  console.log('Native Sign Message Response: ', response);

  if (response?.error) {
    throw new Error(response.error.message);
  }

  return parseSignMessageResponse(response.result);
}
