import React from "react";

import { Wallet as WalletIcon, ChevronDown } from "lucide-react";

type Props = Readonly<{
  walletAddress: String;
}>;

function truncateWalletAddress(walletAddress: String) {
  return `${walletAddress.slice(0, 3)}...${walletAddress.slice(3, 6)}`;
}

export default function WalletSelectorButton({ walletAddress }: Props) {
  return (
    <div className="flex items-center p-2 border border-black rounded-full">
      <WalletIcon size={16} className="mr-2" />
      <span className="text-xs font-bold font-medium mr-1">
        {truncateWalletAddress(walletAddress)}
      </span>
      <ChevronDown size={20} className="pt-1" />
    </div>
  );
}
