import {
  PAGE_WALLET_REQUEST_CHANNEL,
  PAGE_WALLET_RESPONSE_CHANNEL,
} from './constants';

function forwardToBackgroundScript(message: any) {
  browser.runtime.sendMessage(message);
}

function forwardToPageScript(message: any) {
  window.postMessage(message);
}

function isValidOrigin(event: MessageEvent<any>) {
  return event.source === window && event.origin === window.location.origin;
}

export function initContentScript() {
  // Forwards page requests to the background script
  window.addEventListener('message', async event => {
    if (isValidOrigin(event) && event.data) {
      if (event.data.type === PAGE_WALLET_REQUEST_CHANNEL) {
        console.log('Forwarding event to background: ');
        console.log(event);
        forwardToBackgroundScript(event.data);
      }
    }
  });

  // Forwards responses from background/approval to page
  browser.runtime.onMessage.addListener(
    async (message, _sender, _sendResponse) => {
      if (message.type === PAGE_WALLET_RESPONSE_CHANNEL) {
        console.log('Forwarding message to page script: ');
        console.log(message);
        forwardToPageScript({
          ...message,
        });
      }
    }
  );
}
