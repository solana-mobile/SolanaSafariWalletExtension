import {
  SignMessageRequestEncoded,
  SignMessageResponseEncoded
} from "../types/messageTypes";

export async function requestNativeSignMessage(
  request: SignMessageRequestEncoded
): Promise<SignMessageResponseEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Sign Message Response: ", response);

  return null;
}
