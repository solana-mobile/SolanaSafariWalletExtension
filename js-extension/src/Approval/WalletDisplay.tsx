import React from "react";

import { Wallet as WalletIcon } from "lucide-react";

type Props = Readonly<{
  walletAddress: String;
}>;

function truncateWalletAddress(walletAddress: String) {
  return `${walletAddress.slice(0, 3)}...${walletAddress.slice(3, 6)}`;
}

export default function WalletDisplay({ walletAddress }: Props) {
  return (
    <div className="flex items-center">
      <WalletIcon className="mr-2" />
      <span className="font-bold">
        Main Wallet{" "}
        <span className="text-sm font-medium text-gray-500">
          {truncateWalletAddress(walletAddress)}
        </span>
      </span>
    </div>
  );
}
