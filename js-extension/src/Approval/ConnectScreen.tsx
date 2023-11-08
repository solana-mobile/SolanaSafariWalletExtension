import React from "react";
import {
  ConnectRequest,
  ConnectResponseEncoded,
  WalletAccountEncoded
} from "../types/messageTypes";

import WalletDisplay from "./WalletDisplay";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalFooter from "./ApprovalFooter";
import useDummyKeypair from "./useDummyKeypair";

type Props = Readonly<{
  request: ConnectRequest;
  onApprove: (response: ConnectResponseEncoded) => void;
}>;

export default function ConnectScreen({ request, onApprove }: Props) {
  const dummyKeypair = useDummyKeypair();
  const handleConnect = async (request: ConnectRequest) => {
    if (!dummyKeypair) {
      return;
    }

    const account: WalletAccountEncoded = {
      address: dummyKeypair.publicKey.toBase58(),
      publicKey: dummyKeypair.publicKey.toBase58(),
      chains: [
        "solana:mainnet",
        "solana:devnet",
        "solana:testnet",
        "solana:localnet"
      ],
      features: [],
      label: "Sample Safari Extension Wallet"
    };

    console.log("Connected account: ", account);

    if (!request.origin) {
      throw new Error("Sender origin is missing: " + request);
    }

    onApprove({
      type: "wallet-response",
      method: request.method,
      requestId: request.requestId,
      origin: request.origin,
      output: {
        accounts: [account]
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
          <WalletDisplay
            walletAddress={dummyKeypair?.publicKey.toBase58() ?? "Loading..."}
          />
        </div>
      </div>
      <div className="text-sm text-center pb-8">
        You'll share your public wallet adddress
      </div>
      <ApprovalFooter
        onCancel={() => {}}
        onConfirm={() => handleConnect(request)}
        confirmText="Connect"
      />
    </div>
  );
}
