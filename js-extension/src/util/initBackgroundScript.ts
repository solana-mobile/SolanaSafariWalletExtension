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

    browser.action
      .setPopup({ popup: browser.runtime.getURL("approval.html") })
      .then(() => {
        browser.action.openPopup();
      })
      .then(() => {
        browser.action.setPopup({
          popup: browser.runtime.getURL("popup.html")
        });
      });
  });
}

async function initializeApprovalPopup() {
  return new Promise<boolean>(async (resolve, reject) => {
    const onApprovalReady = (
      message: any,
      sender: browser.runtime.MessageSender,
      _sendResponse: any
    ) => {
      console.log("BG: approval listener received message");
      console.log(message);
      console.log(sender);
      if (message === "approval-ready") {
        console.log("Message received, resolving true");
        browser.runtime.onMessage.removeListener(onApprovalReady);
        resolve(true);
      }
    };

    console.log("BG: initializing approval listener");
    browser.runtime.onMessage.addListener(onApprovalReady);

    await browser.action.setPopup({
      popup: browser.runtime.getURL("approval.html")
    });
    await browser.action.openPopup();
    await browser.action.setPopup({
      popup: browser.runtime.getURL("popup.html")
    });
  });
}

async function isApprovalReady(): Promise<boolean> {
  // Send message to see if approval is ready
  return (await browser.runtime.sendMessage("is-approval-ready")) === true;
}

async function forwardWalletRequestToApprovalPopup(request: {
  rpcRequest: any;
  origin: browser.runtime.MessageSender;
}) {
  const alreadyActive = await isApprovalReady();
  if (!alreadyActive) {
    await initializeApprovalPopup();
  }
  browser.runtime.sendMessage(request);
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
        // forwardWalletRequestToApproval({
        //   rpcRequest: message,
        //   origin: sender
        // });
        forwardWalletRequestToApprovalPopup({
          rpcRequest: message,
          origin: sender
        });
      }
    }
  );
}
