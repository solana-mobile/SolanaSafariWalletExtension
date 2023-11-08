import { Keypair } from "@solana/web3.js";
import { WalletAccount } from "@wallet-standard/base";

let burnerKeypair: Keypair;

export default function getKeypairForAccount(account: WalletAccount): Keypair {
  if (!burnerKeypair) {
    burnerKeypair = Keypair.generate();
  }
  return burnerKeypair;
}
