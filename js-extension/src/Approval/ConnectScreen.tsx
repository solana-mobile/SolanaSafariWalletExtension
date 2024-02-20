import React from "react";
import {
  StandardConnectOutputEncoded,
  WalletAccountEncoded
} from "../types/messageTypes";

import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import { RpcRequestQueueItem } from "./ApprovalScreen";
import { nativeGetAccounts } from "../nativeRequests/nativeGetAccounts";
import { fromUint8Array } from "js-base64";
import { Base58EncodedAddress } from "safari-extension-walletlib";
import { PAGE_WALLET_RESPONSE_CHANNEL } from "../pageRpc/constants";
import { RpcResponse } from "../pageRpc/requests";

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

    try {
      const connectedAccounts = await nativeGetAccounts();

      const account: WalletAccountEncoded = {
        address: connectedAccounts[0].toBase58(),
        publicKey: fromUint8Array(connectedAccounts[0].toBytes()),
        chains: [
          "solana:mainnet",
          "solana:devnet",
          "solana:testnet",
          "solana:localnet"
        ],
        features: [],
        label: "Sample Safari Extension Wallet"
      };

      const encodedResult: StandardConnectOutputEncoded = {
        accounts: [account]
      };

      onComplete(
        {
          id: request.rpcRequest.id,
          result: encodedResult
        },
        request.origin.tab.id,
        PAGE_WALLET_RESPONSE_CHANNEL
      );
    } catch (e: any) {
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
