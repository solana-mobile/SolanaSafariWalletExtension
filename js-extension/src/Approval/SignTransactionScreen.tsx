import React from "react";
import {
  SignTransactionRequestEncoded,
  SignTransactionResponseEncoded
} from "../types/messageTypes";
import getDummyKeypair from "../util/getDummyKeypair";
import bs58 from "bs58";
import { VersionedTransaction } from "@solana/web3.js";
import { Separator } from "@/components/ui/separator";
import ApprovalFooter from "./ApprovalFooter";
import ApprovalHeader from "./ApprovalHeader";
import WalletDisplay from "./WalletDisplay";
import { Download, SendHorizontal } from "lucide-react";
import signVersionedTransaction from "../util/signVersionedTransaction";
import useDummyKeypair from "./useDummyKeypair";
import { requestNativeSignTransaction } from "../nativeRequests/requestNativeSignTransaction";

type Props = Readonly<{
  request: SignTransactionRequestEncoded;
  onComplete: (response: SignTransactionResponseEncoded) => void;
}>;

export default function SignTransactionScreen({ request, onComplete }: Props) {
  const dummyKeypair = useDummyKeypair();

  const handleSignTransaction = async (
    request: SignTransactionRequestEncoded
  ) => {
    if (!dummyKeypair) {
      return;
    }

    await requestNativeSignTransaction(request);

    const input = request.input;
    const txBytes = bs58.decode(input.transaction);

    const signedTxBytes = await signVersionedTransaction(
      VersionedTransaction.deserialize(txBytes),
      dummyKeypair
    );

    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signedTransaction: bs58.encode(signedTxBytes)
      }
    });
  };

  const handleCancel = async (request: SignTransactionRequestEncoded) => {
    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signedTransaction: ""
      },
      error: {
        value: "User rejected signing."
      }
    });
  };

  return (
    <div className="flex flex-col mx-auto max-w-sm min-h-screen">
      <div className="flex-grow flex-col space-y-4">
        <ApprovalHeader
          title="Sign Transaction"
          description="A website is requesting you to approve a transaction."
          origin={request.origin}
          displayTitle={true}
        />

        <Separator className="mb-4" />

        <div className="text-lg font-bold">Estimated Changes</div>

        <div className="bg-slate-400 rounded-lg p-4 text-center text-black">
          Transaction simulation not implemented as part of demo
        </div>

        {/* Demo UI */}
        {/* <div className="flex justify-between">
          <span className="font-bold">Network fee</span>
          <span>{"< 0.00001 SOL"}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-row">
            <SendHorizontal />
            <span className="font-bold ml-3">Sent</span>
          </div>
          <span className="text-red-500 font-semibold">{"0.01 SOL"}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-row">
            <Download />
            <span className="font-bold ml-3">Received</span>
          </div>
          <span className="text-green-500 font-semibold">{"0.236 USDC"}</span>
        </div>*/}

        <Separator className="my-4" />

        <div className="text-lg font-bold">as:</div>
        <WalletDisplay
          walletAddress={dummyKeypair?.publicKey.toBase58() ?? "Loading..."}
        />
      </div>

      <ApprovalFooter
        onCancel={() => {
          handleCancel(request);
        }}
        onConfirm={async () => {
          try {
            await handleSignTransaction(request);
          } catch (err: any) {
            const error = err as Error;
            onComplete({
              type: "wallet-response",
              method: request.method,
              requestId: request.requestId,
              origin: request.origin!,
              output: {
                signedTransaction: ""
              },
              error: {
                value: `${error.name}: ${error.message}`
              }
            });
          }
        }}
        confirmText={"Confirm"}
      />
    </div>
  );
}
