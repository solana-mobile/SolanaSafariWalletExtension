import {
  Cluster,
  Connection,
  Keypair,
  SendOptions,
  TransactionSignature,
  clusterApiUrl,
  VersionedTransaction
} from "@solana/web3.js";

export default async function signAndSendTransaction(
  tx: VersionedTransaction,
  keypair: Keypair,
  network: Cluster,
  options?: SendOptions
): Promise<{ signature: TransactionSignature }> {
  tx.sign([
    {
      publicKey: keypair.publicKey,
      secretKey: keypair.secretKey
    }
  ]);

  // Send Transaction
  const connection = new Connection(clusterApiUrl(network));
  const signature = await connection.sendTransaction(tx, options);

  return { signature };
}
