import React from "react";
import { ConnectRequest, ConnectResponseEncoded } from "../types/messageTypes";

import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import { requestNativeConnect } from "../nativeRequests/requestNativeConnect";
import { Base58EncodedAddress } from "./ApprovalScreen";

type Props = Readonly<{
  request: ConnectRequest;
  onComplete: (response: ConnectResponseEncoded) => void;
  selectedAccount: Base58EncodedAddress | null;
}>;

export default function ConnectScreen({
  request,
  onComplete,
  selectedAccount
}: Props) {
  const handleConnect = async (request: ConnectRequest) => {
    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    const connectResponseOutput = await requestNativeConnect(request);

    if (connectResponseOutput === null) {
      onComplete({
        type: "wallet-response",
        method: request.method,
        requestId: request.requestId,
        origin: request.origin,
        output: {
          accounts: []
        },
        error: {
          value: "An error occured during connect."
        }
      });
      return;
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: connectResponseOutput
    });
  };

  const handleCancel = async (request: ConnectRequest) => {
    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onComplete({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        accounts: []
      },
      error: {
        value: "User rejected connecting."
      }
    });
  };

  return (
    <div className="flex flex-col mx-auto max-w-sm min-h-screen">
      <div className="flex-grow flex-col space-y-4 pt-16">
        <ApprovalHeader
          title="Connect"
          description="A website is requesting to connect to your wallet"
          origin={request.origin}
          displayTitle={false}
        />

        <div className="flex flex-col justify-center items-center">
          <div className="text-sm font-bold pb-4">as:</div>
          <WalletDisplay walletAddress={selectedAccount ?? "Loading..."} />
        </div>
      </div>
      <div className="text-sm text-center pb-8">
        You'll share your public wallet adddress
      </div>
      <ApprovalFooter
        onCancel={() => {
          handleCancel(request);
        }}
        onConfirm={() => handleConnect(request)}
        confirmText="Connect"
      />
    </div>
  );
}
