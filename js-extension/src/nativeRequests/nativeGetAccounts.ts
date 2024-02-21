import {
  Base58EncodedAddress,
  sendNativeGetAccountsRequest
} from "safari-extension-walletlib";
import { toUint8Array } from "js-base64";
import base58 from "bs58";
import { PublicKey } from "@solana/web3.js";

export async function nativeGetAccounts(): Promise<PublicKey[]> {
  const result = await sendNativeGetAccountsRequest();

  // Decode base64 then encode to base58
  return result.addresses.map((bs64EncodedAddress: string) => {
    const bytes = toUint8Array(bs64EncodedAddress);
    return new PublicKey(bytes);
  });
}
