/*
See LICENSE folder for this sample’s licensing information.

Abstract:
Script that makes up the extension's background page.
*/
// Send a message from the Safari Web Extension to the containing app extension.
// Listens to messages from "content"

import { PAGE_WALLET_REQUEST_CHANNEL } from "../pageRpc/constants";

async function initializeApprovalTab(): Promise<browser.tabs.Tab> {
  return new Promise<browser.tabs.Tab>((resolve, reject) => {
    const onApproveTabReady = (
      _tabId: number,
      changeInfo: browser.tabs._OnUpdatedChangeInfo,
      tab: browser.tabs.Tab
    ) => {
      if (
        tab.url === browser.runtime.getURL("approval.html") &&
        changeInfo.status === "complete"
      ) {
        browser.tabs.onUpdated.removeListener(onApproveTabReady);
        resolve(tab);
      }
    };

    browser.tabs.onUpdated.addListener(onApproveTabReady);

    browser.tabs
      .create({
        url: browser.runtime.getURL("approval.html")
      })
      .catch((error) => {
        browser.tabs.onUpdated.removeListener(onApproveTabReady);
        reject(error);
      });
  });
}

async function forwardWalletRequestToApproval(request: {
  rpcRequest: any;
  origin: browser.runtime.MessageSender;
}) {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });

  const isApprovalUIActive =
    tabs && tabs[0].url === browser.runtime.getURL("approval.html");

  const targetTab = isApprovalUIActive
    ? tabs[0]
    : await initializeApprovalTab();

  if (targetTab.id) {
    browser.tabs.sendMessage(targetTab.id, request);
  } else {
    console.error("Approval tab is missing tab id");
  }
}

export function initializeBackgroundScript() {
  browser.runtime.onMessage.addListener(
    async (message, sender: browser.runtime.MessageSender, _sendResponse) => {
      if (message.type === PAGE_WALLET_REQUEST_CHANNEL) {
        // Attach sender identity metadata before forwarding
        console.log("Forwarding request to approval");
        console.log(message);
        forwardWalletRequestToApproval({
          rpcRequest: message,
          origin: sender
        });
      }
    }
  );
}
