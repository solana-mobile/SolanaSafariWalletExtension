import { SignMessageRequestEncoded } from "../types/messageTypes";

type Base58EncodedSignature = string;

function parseSignMessageResponse(
  response: any
): Base58EncodedSignature | null {
  if (!response.value || typeof response.value !== "string") {
    return null;
  }
  return response.value as Base58EncodedSignature;
}

export async function requestNativeSignMessage(
  request: SignMessageRequestEncoded
): Promise<Base58EncodedSignature | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Sign Message Response: ", response);

  return parseSignMessageResponse(response);
}
