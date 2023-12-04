import {
  ConnectRequest,
  ConnectResponseEncoded,
  SignMessageRequestEncoded,
  SignMessageResponseEncoded,
  SignTransactionRequestEncoded,
  SignTransactionResponseEncoded
} from "../types/messageTypes";

export async function requestNativeConnect(
  request: ConnectRequest
): Promise<ConnectResponseEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Connect Response: ", response);

  //   if (response?.value?.keypair && response.status === "success") {
  //     const parsedKeypair: Keypair = parseKeypairFromNativeResponse(response);
  //     console.log("parsedPubKey: ", parsedKeypair.publicKey.toBase58());
  //     setKeypair(parsedKeypair);
  //   } else if (response && response.status === "error") {
  //     console.error("Error fetching keypair:", response.message);
  //     setKeypair(null);
  //   } else {
  //     console.error("Unexpected response format from native message");
  //   }
  return null;
}

export async function requestNativeSignMessage(
  request: SignMessageRequestEncoded
): Promise<SignMessageResponseEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Sign Message Response: ", response);

  return null;
}

export async function requestNativeSignTransaction(
  request: SignTransactionRequestEncoded
): Promise<SignTransactionResponseEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);
  console.log("Native Sign Transaction Response: ", response);

  return null;
}
