import { PAGE_WALLET_REQUEST_CHANNEL } from "../pageRpc/constants";

async function initializeApprovalPopup() {
  return new Promise<boolean>(async (resolve, reject) => {
    const onApprovalReady = (
      message: any,
      _sender: browser.runtime.MessageSender,
      _sendResponse: any
    ) => {
      if (message === "approval-ready") {
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

async function forwardWalletRequestToApprovalPopup(request: {
  rpcRequest: any;
  origin: browser.runtime.MessageSender;
}) {
  await initializeApprovalPopup();
  browser.runtime.sendMessage(request);
}

export function initializeBackgroundScript() {
  browser.runtime.onMessage.addListener(
    async (message, sender: browser.runtime.MessageSender, _sendResponse) => {
      if (message.type === PAGE_WALLET_REQUEST_CHANNEL) {
        forwardWalletRequestToApprovalPopup({
          rpcRequest: message,
          origin: sender
        });
      }
    }
  );
}
