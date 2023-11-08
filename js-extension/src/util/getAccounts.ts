import type { WalletAccount } from "@wallet-standard/base";
import { SafariExtensionDemoWalletAccount } from "../wallet/account";
import getKeypairForAccount from "./getKeypairForAccount";

export default function getAccounts(): SafariExtensionDemoWalletAccount[] {
  const randomKeypair = getKeypairForAccount(null as any as WalletAccount);
  const account: WalletAccount = {
    address: randomKeypair.publicKey.toBase58(),
    publicKey: randomKeypair.publicKey.toBytes(),
    chains: [
      "solana:mainnet",
      "solana:devnet",
      "solana:testnet",
      "solana:localnet"
    ],
    features: [],
    label: "Sample Safari Extension Wallet"
  };
  return [new SafariExtensionDemoWalletAccount(account)];
}
