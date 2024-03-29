import React from "react";
import {
  SolanaSignTransactionInputEncoded,
  SolanaSignTransactionOutputEncoded
} from "../../types/messageTypes";
import { PublicKey, Transaction } from "@solana/web3.js";
import { Separator } from "@radix-ui/react-separator";
import ApprovalFooter from "../ApprovalFooter";
import ApprovalHeader from "../ApprovalHeader";
import WalletDisplay from "../WalletSelectorButton";
import { Base58EncodedAddress } from "@solana-mobile/safari-extension-walletlib-js";
import { RpcRequestQueueItem } from "../ApprovalScreen";
import { RpcResponse } from "../../pageRpc/requests";
import { toUint8Array, fromUint8Array } from "js-base64";
import { nativeSignPayload } from "../../nativeRequests/nativeSignPayloads";
import { PAGE_WALLET_RESPONSE_CHANNEL } from "../../pageRpc/constants";

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

  const handleSignAndSendTransaction = async (request: RpcRequestQueueItem) => {
    if (!request.origin || !request.origin.tab?.id) {
      throw new Error("Sender origin is missing: " + request);
    }

    const encodedWalletAccount = (
      request.rpcRequest.params as SolanaSignTransactionInputEncoded
    ).account;

    const requestedPubkey = new PublicKey(
      toUint8Array(encodedWalletAccount.publicKey)
    );

    const encodedTx = (
      request.rpcRequest.params as SolanaSignTransactionInputEncoded
    ).transaction;

    const tx = Transaction.from(toUint8Array(encodedTx));
    const txMessageBody = tx.serializeMessage();

    const txSignature = await nativeSignPayload(requestedPubkey, txMessageBody);

    tx.addSignature(requestedPubkey, Buffer.from(txSignature.buffer));

    const encodedResult: SolanaSignTransactionOutputEncoded = {
      signedTransaction: fromUint8Array(tx.serialize())
    };

    // const { signature } = await signAndSendTransaction(
    //   VersionedTransaction.deserialize(txBytes),
    //   dummyKeypair,
    //   getClusterForChain(input.chain as SolanaChain),
    //   input.options
    // );

    // onComplete({
    //   type: "wallet-response",
    //   method: request.method,
    //   requestId: request.requestId,
    //   origin: request.origin,
    //   output: {
    //     signature
    //   }
    // });
  };

  const handleCancel = async (request: RpcRequestQueueItem) => {
    if (!request.origin || !request.origin.tab?.id) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete(
      {
        id: request.rpcRequest.id,
        error: {
          value: "User rejected signing."
        }
      },
      request.origin.tab.id,
      PAGE_WALLET_RESPONSE_CHANNEL
    );
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
            onComplete(
              {
                id: request.rpcRequest.id,
                error: {
                  value: "User during signing."
                }
              },
              request.origin.tab!.id!,
              PAGE_WALLET_RESPONSE_CHANNEL
            );
          }
        }}
        confirmText={"Confirm"}
      />
    </div>
  );
}
