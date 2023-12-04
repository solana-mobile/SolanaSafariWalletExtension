import {
  SignTransactionRequestEncoded,
  SignTransactionResponseEncoded
} from "../types/messageTypes";

export async function requestNativeSignTransaction(
  request: SignTransactionRequestEncoded
): Promise<SignTransactionResponseEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Sign Transaction Response: ", response);

  return null;
}
