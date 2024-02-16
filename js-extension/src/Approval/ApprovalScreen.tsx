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
import { nativeGetAccounts } from "../nativeRequests/nativeGetAccounts";
import {
  RpcResponse,
  WalletRpcRequest
} from "safari-extension-walletlib/lib/pageRpc/requests";
import {
  PAGE_WALLET_REQUEST_CHANNEL,
  PAGE_WALLET_RESPONSE_CHANNEL
} from "safari-extension-walletlib";

export type Base58EncodedAddress = string;

function getRequestScreenComponent(
  request: RpcRequestQueueItem,
  onComplete: (
    response: RpcResponse,
    originTabId: number,
    responseChannel: string
  ) => void,
  selectedAccount: Base58EncodedAddress | null
) {
  switch (request.rpcRequest.method) {
    case WalletRequestMethod.SOLANA_CONNECT:
      return (
        <ConnectScreen
          request={request}
          onComplete={onComplete}
          selectedAccount={selectedAccount}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_MESSAGE:
      return (
        <SignMessageScreen
          request={request as SignMessageRequestEncoded}
          onComplete={onComplete}
          selectedAccount={selectedAccount}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_AND_SEND_TRANSACTION:
      return (
        <SignAndSendTransactionScreen
          request={request as SignAndSendTransactionRequestEncoded}
          onComplete={onComplete}
          selectedAccount={selectedAccount}
        />
      );
    case WalletRequestMethod.SOLANA_SIGN_TRANSACTION:
      return (
        <SignTransactionScreen
          request={request as SignTransactionRequestEncoded}
          onComplete={onComplete}
          selectedAccount={selectedAccount}
        />
      );
    default:
      return <div> loading </div>;
  }
}

export type WalletRpcRequestWithId = WalletRpcRequest & { id: string };
export type RpcRequestQueueItem = {
  origin: browser.runtime.MessageSender;
  rpcRequest: WalletRpcRequestWithId;
  responseChannel: string;
};
export type WalletEvent = {
  origin: browser.runtime.MessageSender;
  rpcRequest: {
    detail: WalletRpcRequestWithId;
    type: string;
  };
};

function isValidRpcMethod(method: string): boolean {
  return Object.values(WalletRequestMethod).includes(
    method as WalletRequestMethod
  );
}

export default function ApprovalScreen() {
  const [requestQueue, setRequestQueue] = useState<Array<RpcRequestQueueItem>>(
    []
  );
  const [selectedAccount, setSelectedAccount] =
    useState<Base58EncodedAddress | null>(null);

  // This effect achieves two things:
  //    1. Initializes the wallet request listener for the approval tab
  //    2. Signals to background that this listener, and thus the approval tab, is ready to receive requests
  useEffect(() => {
    function handleWalletRequest(event: WalletEvent) {
      console.log("Approval Screen Request Received: ", event);
      setTimeout(() => {
        console.log("Approval Screen Request Received: ", event);
      }, 5000);

      if (
        event.rpcRequest.type === PAGE_WALLET_REQUEST_CHANNEL &&
        isValidRpcMethod(event.rpcRequest.detail.method)
      ) {
        // Add the new RPC Request to the queue
        setRequestQueue((prevQueue) => [
          ...prevQueue,
          {
            origin: event.origin,
            rpcRequest: event.rpcRequest.detail,
            responseChannel: PAGE_WALLET_RESPONSE_CHANNEL
          }
        ]);
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

  // Fetch the address of the selected account
  useEffect(() => {
    async function getSelectedAccount() {
      const accounts = await nativeGetAccounts();
      if (accounts && accounts.length > 0) {
        setSelectedAccount(accounts[0]);
      }
    }
    getSelectedAccount();
  }, []);

  const onRequestComplete = (
    response: RpcResponse,
    originTabId: number,
    responseChannel: string
  ) => {
    // TODO: Only `update` and `close` tab if its the last request in queue
    browser.tabs
      // Sends an approval response to the originTab
      .sendMessage(originTabId, { type: responseChannel, detail: response })
      // Switches active tab back to the dApp (originTab)
      .then(() => browser.tabs.update(originTabId, { active: true }))
      // Closes the Approval UI tab
      .then(() => window.close());
  };

  return (
    <div className="p-6">
      {requestQueue.length > 0
        ? getRequestScreenComponent(
            requestQueue[0],
            onRequestComplete,
            selectedAccount
          )
        : null}
    </div>
  );
}
