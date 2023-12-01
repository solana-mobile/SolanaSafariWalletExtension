import React, { useEffect, useState } from "react";
import {
  WalletRequestMethod,
  ConnectRequest,
  BaseWalletRequestEncoded,
  BaseWalletResponseEncoded,
  SignTransactionRequestEncoded,
  SignMessageRequestEncoded,
  SignAndSendTransactionRequestEncoded
} from "../types/messageTypes";
import ConnectScreen from "./ConnectScreen";
import SignMessageScreen from "./SignMessageScreen";
import SignTransactionScreen from "./SignTransactionScreen";
import SignAndSendTransactionScreen from "./SignAndSendTransactionScreen";

function getRequestScreenComponent(
  request: BaseWalletRequestEncoded,
  onComplete: (response: BaseWalletResponseEncoded) => void
) {
  switch (request.method) {
    case WalletRequestMethod.SOLANA_CONNECT:
      return (
        <ConnectScreen
          request={request as ConnectRequest}
          onComplete={onComplete}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_MESSAGE:
      return (
        <SignMessageScreen
          request={request as SignMessageRequestEncoded}
          onComplete={onComplete}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION:
      return (
        <SignAndSendTransactionScreen
          request={request as SignAndSendTransactionRequestEncoded}
          onComplete={onComplete}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_TRANSACTION:
      return (
        <SignTransactionScreen
          request={request as SignTransactionRequestEncoded}
          onComplete={onComplete}
        />
      );
    default:
      return <div> loading </div>;
  }
}

export default function ApprovalScreen() {
  const [requestQueue, setRequestQueue] = useState<
    Array<BaseWalletRequestEncoded>
  >([]);
  // This effect achieves two things:
  //    1. Initializes the wallet request listener for the approval tab
  //    2. Signals to background that this listener, and thus the approval tab, is ready to receive requests
  useEffect(() => {
    function handleWalletRequest(request: BaseWalletRequestEncoded) {
      console.log("Approval Screen Request Received: ", request);

      if (request.type === "approval-tab-request") {
        // Add the new request to the queue
        setRequestQueue((prevQueue) => [...prevQueue, request]);
        console.log(request);
      }
    }

    // Begin listening for wallet requests
    browser.runtime.onMessage.addListener(handleWalletRequest);

    // Signal approval listener is ready
    browser.runtime.sendMessage("tab-ready");

    // Clean up the listener when the component is unmounted
    return () => {
      browser.runtime.onMessage.removeListener(handleWalletRequest);
    };
  }, []);

  const onRequestComplete = (response: BaseWalletResponseEncoded) => {
    if (!response.origin?.tab?.id) {
      throw new Error("Request has no origin sender metadata");
    }

    const originTabId = response.origin.tab.id;
    // TODO: Only `update` and `close` tab if its the last request in queue
    browser.tabs
      // Sends an approval response to the originTab
      .sendMessage(originTabId, response)
      // Switches active tab back to the dApp (originTab)
      .then(() => browser.tabs.update(originTabId, { active: true }))
      // Closes the Approval UI tab
      .then(() => window.close());
  };

  return (
    <div className="p-6">
      {requestQueue.length > 0
        ? getRequestScreenComponent(requestQueue[0], onRequestComplete)
        : null}
    </div>
  );
}
