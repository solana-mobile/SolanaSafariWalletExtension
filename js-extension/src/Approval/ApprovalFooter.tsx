import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

type FooterProps = Readonly<{
  onCancel: () => void;
  onConfirm: () => void;
  confirmText: string;
}>;

export default function ApprovalFooter({
  onCancel,
  onConfirm,
  confirmText
}: FooterProps) {
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);

  const handleCancel = () => {
    setIsCancelLoading(true);
    onCancel();
  };

  const handleConfirm = () => {
    setIsConfirmLoading(true);
    onConfirm();
  };

  return (
    <div className="mt-auto flex justify-between pb-24 space-x-2">
      <Button
        className="rounded-2xl bg-black w-2/5 h-12 mr-2"
        onClick={handleCancel}
      >
        {isCancelLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <span className="text-base">Cancel</span>
        )}
      </Button>
      <Button
        className="rounded-2xl bg-black w-2/5 h-12 px-4"
        onClick={handleConfirm}
      >
        {isConfirmLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <span className="text-base">{confirmText}</span>
        )}
      </Button>
    </div>
  );
}
