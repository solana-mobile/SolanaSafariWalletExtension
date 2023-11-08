import { Keypair, VersionedTransaction } from "@solana/web3.js";

export default async function signVersionedTransaction(
  transaction: VersionedTransaction,
  keypair: Keypair
): Promise<Uint8Array> {
  transaction.sign([
    {
      publicKey: keypair.publicKey,
      secretKey: keypair.secretKey
    }
  ]);
  return transaction.serialize();
}
