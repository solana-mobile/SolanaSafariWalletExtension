import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import OriginHeader from "./OriginHeader";
import WalletDisplay from "./WalletSelectorButton";

type Props = Readonly<{
  title: string;
  subtitle: string;
  connectedAddress: string;
}>;

function getBaseUrl(url: string | undefined): string | undefined {
  if (!url) {
    return undefined;
  }
  const match = url.match(/(https?:\/\/[^\/]+\/)/);
  return match ? match[1] : undefined;
}

export default function ApprovalHeader({
  title,
  subtitle,
  connectedAddress
}: Props) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-12">
        <img
          src={"https://jup.ag/favicon.ico"}
          alt="FavIcon"
          className="w-14 h-14 bg-gray-800 rounded-full p-2"
        />

        <WalletDisplay walletAddress={connectedAddress} />
      </div>

      <div className="flex-col">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-bold text-muted-foreground text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
