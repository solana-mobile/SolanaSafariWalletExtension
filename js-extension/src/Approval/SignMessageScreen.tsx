import React from "react";
import {
  SolanaSignMessageInputEncoded,
  SolanaSignMessageOutputEncoded
} from "../types/messageTypes";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import WalletDisplay from "./WalletSelectorButton";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import { RpcRequestQueueItem } from "./ApprovalScreen";
import { nativeSignPayload } from "../nativeRequests/nativeSignPayloads";
import { fromUint8Array, toUint8Array } from "js-base64";
import { PublicKey } from "@solana/web3.js";
import { RpcResponse } from "../pageRpc/requests";
import { Base58EncodedAddress } from "@solana-mobile/safari-extension-walletlib-js";
import { PAGE_WALLET_RESPONSE_CHANNEL } from "../pageRpc/constants";
import base58 from "bs58";

type Props = Readonly<{
  request: RpcRequestQueueItem;
  onComplete: (
    response: RpcResponse,
    originTabId: number,
    responseChannel: string
  ) => void;
  selectedAccount: Base58EncodedAddress | null;
}>;

export default function SignMessageScreen({
  request,
  onComplete,
  selectedAccount
}: Props) {
  const handleSignMessage = async (request: RpcRequestQueueItem) => {
    if (!request.origin || !request.origin.tab?.id) {
      throw new Error("Sender origin is missing: " + request);
    }

    const requestedAccount = (
      request.rpcRequest.params as SolanaSignMessageInputEncoded
    ).account;
    const message = (request.rpcRequest.params as SolanaSignMessageInputEncoded)
      .message;

    const base58PubKey = base58.encode(
      toUint8Array(requestedAccount.publicKey)
    );

    const signature = await nativeSignPayload(
      new PublicKey(base58PubKey),
      toUint8Array(message)
    );

    const encodedResult: SolanaSignMessageOutputEncoded = {
      signedMessage: message,
      signature: fromUint8Array(signature)
    };

    onComplete(
      {
        id: request.rpcRequest.id,
        result: encodedResult
      },
      request.origin.tab.id,
      PAGE_WALLET_RESPONSE_CHANNEL
    );
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
    <div className="flex flex-col p-2 mx-auto max-w-sm min-h-screen">
      <div className="flex-grow flex-col space-y-4">
        <ApprovalHeader
          title={request.origin.tab?.title ?? "Unknown website"}
          subtitle="wants you to sign a message"
          connectedAddress={selectedAccount ?? "..."}
        />

        <div className="text-black font-bold text-lg">Message</div>
        <div className="pl-4 rounded-md shadow">
          <ScrollArea className="h-[50px]">
            <p className="text-sm text-muted-foreground mt-2">Hello Solana!</p>
          </ScrollArea>
        </div>

        <Separator className="my-4" />
      </div>

      <ApprovalFooter
        onCancel={() => {
          handleCancel(request);
        }}
        onConfirm={async () => {
          try {
            await handleSignMessage(request);
          } catch (err: any) {
            const error = err as Error;
            onComplete(
              {
                id: request.rpcRequest.id,
                error: {
                  value:
                    "An error occured during signing message: " + error.message
                }
              },
              request.origin.tab!.id!,
              PAGE_WALLET_RESPONSE_CHANNEL
            );
          }
        }}
        confirmText={"Sign"}
      />
    </div>
  );
}
