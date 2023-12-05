import React from "react";
import {
  SignMessageRequestEncoded,
  SignMessageResponseEncoded
} from "../types/messageTypes";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import { requestNativeSignMessage } from "../nativeRequests/requestNativeSignMessage";
import { Base58EncodedAddress } from "./ApprovalScreen";

type Props = Readonly<{
  request: SignMessageRequestEncoded;
  onComplete: (response: SignMessageResponseEncoded) => void;
  selectedAccount: Base58EncodedAddress;
}>;

export default function SignMessageScreen({
  request,
  onComplete,
  selectedAccount
}: Props) {
  const handleSignMessage = async (request: SignMessageRequestEncoded) => {
    if (!selectedAccount) {
      return;
    }

    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    const signedMessage = await requestNativeSignMessage(request);

    if (!signedMessage) {
      onComplete({
        type: "wallet-response",
        method: request.method,
        requestId: request.requestId,
        origin: request.origin,
        output: {
          signedMessage: "",
          signature: ""
        },
        error: {
          value: "An error occured during signing."
        }
      });
      return;
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signedMessage: request.input.message,
        signature: signedMessage
      }
    });
  };

  const handleCancel = async (request: SignMessageRequestEncoded) => {
    if (!selectedAccount) {
      return;
    }

    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        signedMessage: "",
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
            onComplete({
              type: "wallet-response",
              method: request.method,
              requestId: request.requestId,
              origin: request.origin!,
              output: {
                signedMessage: "",
                signature: ""
              },
              error: {
                value: `${error.name}: ${error.message}`
              }
            });
          }
        }}
        confirmText={"Sign Message"}
      />
    </div>
  );
}
