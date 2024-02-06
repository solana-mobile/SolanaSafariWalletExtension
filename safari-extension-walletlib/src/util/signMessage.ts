import { Keypair } from "@solana/web3.js";
import { sign } from "@solana/web3.js/src/utils/ed25519";

export default function signMessage(
  messageByteArray: Uint8Array,
  keypair: Keypair
): { signature: Uint8Array } {
  return { signature: sign(messageByteArray, keypair.secretKey.slice(0, 32)) };
}
