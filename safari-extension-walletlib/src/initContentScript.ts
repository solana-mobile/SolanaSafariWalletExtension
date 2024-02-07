import {
  BaseWalletRequestEncoded,
  BaseWalletResponseEncoded,
  WalletResponseEvent,
  WalletRequestEvent,
} from './messages/walletMessage';

function forwardToBackgroundScript(request: BaseWalletRequestEncoded) {
  // Overwrite `type` to wallet-approval-request before forwarding
  browser.runtime.sendMessage({ ...request });
}

function forwardToPageScript(response: BaseWalletResponseEncoded) {
  window.dispatchEvent(new WalletResponseEvent(response));
}

export function initContentScript(handler: (request: any) => Promise<any>) {
  // Add listener for events from the page
  window.addEventListener(WalletRequestEvent.EVENT_TYPE, async event => {
    console.log('Content Script Received: ', event);
    const walletRequest = (event as WalletRequestEvent).detail;
    forwardToBackgroundScript(walletRequest);
  });

  // Add listener for messages from the background script or approval
  browser.runtime.onMessage.addListener(
    async (message, _sender, _sendResponse) => {
      console.log('Content Script Runtime Listener: ', message);
      if (message.type === WalletResponseEvent.EVENT_TYPE) {
        forwardToPageScript(message);
      }
    }
  );
}
