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
    console.log('content event data: ' + event.data);
    if (isValidOrigin(event) && event.data) {
      if (event.data.type === PAGE_WALLET_REQUEST_CHANNEL) {
        forwardToBackgroundScript(event.data);
      }
    }
  });

  // Forwards responses from background/approval to page
  browser.runtime.onMessage.addListener(
    async (message, _sender, _sendResponse) => {
      console.log('content forward: ' + message);
      if (message.type === PAGE_WALLET_RESPONSE_CHANNEL) {
        console.log('content forward to page script: ');
        console.log(message);
        forwardToPageScript({
          ...message,
        });
      }
    }
  );
}
