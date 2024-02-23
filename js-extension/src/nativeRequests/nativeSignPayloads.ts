import { sendNativeSignPayloadsRequest } from "@solana-mobile/safari-extension-walletlib-js";
import { fromUint8Array, toUint8Array } from "js-base64";
import { PublicKey } from "@solana/web3.js";

export async function nativeSignPayload(
  userPubkey: PublicKey,
  payload: Uint8Array
): Promise<Uint8Array> {
  const result = await sendNativeSignPayloadsRequest({
    address: fromUint8Array(userPubkey.toBytes()),
    payloads: [fromUint8Array(payload)]
  });

  const bs64EncodedSignedPayload = result.signed_payloads[0];

  if (!bs64EncodedSignedPayload) {
    throw Error("Invalid signed payload results");
  }

  // Decode and return signed payload bytes
  return toUint8Array(bs64EncodedSignedPayload);
}
