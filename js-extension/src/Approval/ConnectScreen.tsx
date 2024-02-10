import React from "react";
import { ConnectRequest, ConnectResponseEncoded } from "../types/messageTypes";

import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import {
  nativeConnect,
  requestNativeConnect
} from "../nativeRequests/requestNativeConnect";
import {
  Base58EncodedAddress,
  RpcRequestQueueItem,
  WalletEvent,
  WalletRpcRequestWithId
} from "./ApprovalScreen";
import {
  PAGE_WALLET_REQUEST_CHANNEL,
  PAGE_WALLET_RESPONSE_CHANNEL,
  RpcResponse,
  StandardConnectOutputEncoded,
  WalletRequestMethod
} from "safari-extension-walletlib";
import {
  StandardConnectInput,
  StandardConnectOutput
} from "@wallet-standard/features";

type Props = Readonly<{
  request: RpcRequestQueueItem;
  onComplete: (
    response: RpcResponse,
    originTabId: number,
    responseChannel: string
  ) => void;
  selectedAccount: Base58EncodedAddress | null;
}>;

export default function ConnectScreen({
  request,
  onComplete,
  selectedAccount
}: Props) {
  const handleConnect = async (request: RpcRequestQueueItem) => {
    if (!request.origin || !request.origin.tab?.id) {
      throw new Error("Sender origin is missing: " + request);
    }

    const encodedConnectResponseOutput = await nativeConnect({
      input: request.rpcRequest.params as StandardConnectInput,
      method: WalletRequestMethod.SOLANA_CONNECT
    });

    if (encodedConnectResponseOutput === null) {
      onComplete(
        {
          id: request.rpcRequest.id,
          error: {
            value: "An error occured during connect."
          }
        },
        request.origin.tab.id,
        PAGE_WALLET_RESPONSE_CHANNEL
      );
      return;
    }

    onComplete(
      {
        id: request.rpcRequest.id,
        result: encodedConnectResponseOutput
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
          value: "User rejected connecting."
        }
      },
      request.origin.tab.id,
      request.responseChannel
    );
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
