// Send a message from the Safari Web Extension to the containing app extension.
// Listens to messages from "content"

import { BaseWalletRequest } from "./types/messageTypes";
import { initializeBackgroundScript } from "./util/initBackgroundScript";

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

async function forwardWalletRequestToApproval(request: BaseWalletRequest) {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  const isApprovalUIActive =
    browser.runtime.getURL("approval.html") === activeTab.url;

  const targetTab = isApprovalUIActive
    ? activeTab
    : await initializeApprovalTab();

  if (targetTab.id) {
    browser.tabs.sendMessage(targetTab.id, {
      ...request,
      type: "approval-tab-request"
    });
  } else {
    console.error("Approval tab is missing tab id");
  }
}

// browser.runtime.onMessage.addListener(
//   async (request, sender: browser.runtime.MessageSender, _sendResponse) => {
//     console.log("Background Script Received: " + request);
//     if (request.type === "wallet-approval-request") {
//       // Attach sender identity metadata before forwarding
//       forwardWalletRequestToApproval({
//         ...request,
//         origin: sender
//       } as BaseWalletRequest);
//     }
//   }
// );

initializeBackgroundScript();
