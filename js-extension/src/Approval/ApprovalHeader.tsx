import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import OriginHeader from "./OriginHeader";

type Props = Readonly<{
  title: string;
  description: string;
  origin?: browser.runtime.MessageSender;
  displayTitle: boolean;
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
  description,
  origin,
  displayTitle
}: Props) {
  return (
    <>
      {displayTitle ? (
        <CardHeader>
          <CardTitle className="text-xxl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      ) : null}
      <OriginHeader
        title={origin?.tab?.title}
        url={getBaseUrl(origin?.tab?.url)}
        favIconUrl={origin?.tab?.favIconUrl}
      />
    </>
  );
}
