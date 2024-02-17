import React from "react";
import {
  SignMessageRequestEncoded,
  SignMessageResponseEncoded,
  SolanaSignMessageInputEncoded,
  SolanaSignMessageOutputEncoded
} from "../types/messageTypes";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import { requestNativeSignMessage } from "../nativeRequests/requestNativeSignMessage";
import { RpcRequestQueueItem } from "./ApprovalScreen";
import {
  Base58EncodedAddress,
  PAGE_WALLET_RESPONSE_CHANNEL,
  RpcResponse
} from "safari-extension-walletlib";
import { nativeSignPayload } from "../nativeRequests/nativeSignPayloads";
import { fromUint8Array, toUint8Array } from "js-base64";
import { PublicKey } from "@solana/web3.js";

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

    const signature = await nativeSignPayload(
      new PublicKey(requestedAccount.publicKey),
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
    <div className="flex flex-col mx-auto max-w-sm min-h-screen">
      <div className="flex-grow flex-col space-y-4">
        <ApprovalHeader
          title="Sign Message"
          description="A website is requesting you to sign a message."
          origin={request.origin}
          displayTitle={true}
        />

        <Separator className="mb-4" />

        <div className="text-lg font-bold">Sign this message</div>
        <div className="p-4 bg-gray-100 rounded-md shadow">
          <ScrollArea className="h-[50px]">
            <p className="text-sm text-muted-foreground mt-2">Hello Solana!</p>
          </ScrollArea>
        </div>

        <Separator className="my-4" />

        <div className="text-lg font-bold">Wallet</div>
        <WalletDisplay walletAddress={selectedAccount ?? "Loading.."} />
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
                  value: "An error occured during signing message."
                }
              },
              request.origin.tab!.id!,
              PAGE_WALLET_RESPONSE_CHANNEL
            );
          }
        }}
        confirmText={"Sign Message"}
      />
    </div>
  );
}
