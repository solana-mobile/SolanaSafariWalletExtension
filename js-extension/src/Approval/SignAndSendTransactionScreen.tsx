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
import { Separator } from "@radix-ui/react-separator";
import ApprovalFooter from "./ApprovalFooter";
import ApprovalHeader from "./ApprovalHeader";
import WalletDisplay from "./WalletDisplay";
import { RpcResponse, Base58EncodedAddress } from "safari-extension-walletlib";
import { RpcRequestQueueItem } from "./ApprovalScreen";

type Props = Readonly<{
  request: RpcRequestQueueItem;
  onComplete: (
    response: RpcResponse,
    originTabId: number,
    responseChannel: string
  ) => void;
  selectedAccount: Base58EncodedAddress | null;
}>;

export default function SignAndSendTransactionScreen({
  request,
  onComplete
}: Props) {
  const dummyKeypair = useDummyKeypair();

  const handleSignAndSendTransaction = async (
    request: SignAndSendTransactionRequestEncoded
  ) => {
    if (!dummyKeypair) {
      return;
    }

    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    const txBytes = bs58.decode(request.input.transaction);

    const input = request.input;

    const { signature } = await signAndSendTransaction(
      VersionedTransaction.deserialize(txBytes),
      dummyKeypair,
      getClusterForChain(input.chain as SolanaChain),
      input.options
    );

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signature
      }
    });
  };

  const handleCancel = async (
    request: SignAndSendTransactionRequestEncoded
  ) => {
    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signature: ""
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
            await handleSignAndSendTransaction(request);
          } catch (err: any) {
            const error = err as Error;
            onComplete({
              type: "wallet-response",
              method: request.method,
              requestId: request.requestId,
              origin: request.origin!,
              output: {
                signature: ""
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
