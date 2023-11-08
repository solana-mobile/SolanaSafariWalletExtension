import { Keypair, Transaction } from "@solana/web3.js";

export default async function signTransaction(
  transaction: Transaction,
  keypair: Keypair
): Promise<Uint8Array> {
  transaction.sign({
    publicKey: keypair.publicKey,
    secretKey: keypair.secretKey
  });
  return transaction.serialize();
}
