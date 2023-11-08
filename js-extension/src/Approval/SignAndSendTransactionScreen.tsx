import React from "react";
import {
  SignAndSendTransactionRequestEncoded,
  SignAndSendTransactionResponseEncoded
} from "../types/messageTypes";
import getDummyKeypair from "../util/getDummyKeypair";
import bs58 from "bs58";
import signAndSendTransaction from "../util/signAndSendTransaction";
import { VersionedTransaction } from "@solana/web3.js";
import { SolanaChain, getClusterForChain } from "../wallet/solana";
import useDummyKeypair from "./useDummyKeypair";

type Props = Readonly<{
  request: SignAndSendTransactionRequestEncoded;
  onApprove: (response: SignAndSendTransactionResponseEncoded) => void;
}>;

export default function SignAndSendTransactionScreen({
  request,
  onApprove
}: Props) {
  const dummyKeypair = useDummyKeypair();

  const handleSignAndSendTransaction = async (
    request: SignAndSendTransactionRequestEncoded
  ) => {
    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }
    if (!dummyKeypair) {
      return;
    }
    const txBytes = bs58.decode(request.input.transaction);

    const input = request.input;
    const { signature } = await signAndSendTransaction(
      VersionedTransaction.deserialize(txBytes),
      dummyKeypair,
      getClusterForChain(input.chain as SolanaChain),
      input.options
    );

    onApprove({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signature
      }
    });
  };

  return (
    <div>
      <button onClick={() => handleSignAndSendTransaction(request)}>
        SignAndSendTransaction
      </button>
      <button onClick={() => {}}>Reject</button>
    </div>
  );
}
