import { SignTransactionRequestEncoded } from "../types/messageTypes";

type Base58SignedTransaction = string;

function parseSignTransactionResponse(
  response: any
): Base58SignedTransaction | null {
  if (!response.value || typeof response.value !== "string") {
    return null;
  }
  return response.value as Base58SignedTransaction;
}

export async function requestNativeSignTransaction(
  request: SignTransactionRequestEncoded
): Promise<Base58SignedTransaction | null> {
  const response = await browser.runtime.sendNativeMessage("id", {
    method: request.method,
    input: {
      // fallback to address if publicKey not provided
      account: request.input.account.publicKey ?? request.input.account.address,
      transaction: request.input.transaction
    }
  });
  console.log("Native Sign Transaction Response: ", response);

  return parseSignTransactionResponse(response);
}
