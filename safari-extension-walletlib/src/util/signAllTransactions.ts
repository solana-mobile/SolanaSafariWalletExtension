import { Keypair, Transaction } from "@solana/web3.js";
import signTransaction from "./signTransaction";

export default async function signAllTransactions(
  transactions: Transaction[],
  keypair: Keypair
): Promise<Uint8Array[]> {
  return Promise.all(
    transactions.map(async (tx) => {
      return await signTransaction(tx, keypair);
    })
  );
}
