import { sendNativeGetAccountsRequest } from "safari-extension-walletlib";
import { Base58EncodedAddress } from "../Approval/ApprovalScreen";
import { toUint8Array } from "js-base64";
import base58 from "bs58";

export async function nativeGetAccounts(): Promise<Base58EncodedAddress[]> {
  const result = await sendNativeGetAccountsRequest();

  // Decode base64 then encode to base58
  return result.addresses.map((bs64EncodedAddress: string) => {
    const bytes = toUint8Array(bs64EncodedAddress);
    return base58.encode(bytes);
  });
}
