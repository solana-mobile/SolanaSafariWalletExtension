import React, { useEffect } from "react";
import { WalletRequestMethod } from "../types/messageTypes";
import { nativeGetAccounts } from "../nativeRequests/nativeGetAccounts";
import { toUint8Array } from "js-base64";
import base58 from "bs58";

export default function App() {
  const popupContainer = {
    display: "flex",
    height: "100vh", // for full viewport height centering
    backgroundColor: "#f4f4f4" // background color for the entire viewport
  };

  const contentStyle = {
    backgroundColor: "white", // background color of the card
    padding: "20px 40px",
    borderRadius: "10px", // to make it rounded
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // some shadow for the floating effect
  };

  useEffect(() => {
    browser.runtime.onMessage.addListener(
      async (message, sender: browser.runtime.MessageSender, _sendResponse) => {
        console.log("Popup message received ");
        console.log(message);
        console.log(sender);
      }
    );
  }, []);

  const simulateGetAccountsRequest = async () => {
    const response = await nativeGetAccounts();
    console.log(response);
  };

  const simulatePrintWindow = async () => {
    console.log(window);
    const views = await browser.extension.getViews({});
    console.log(views);
  };

  const simulateWindowClose = () => {
    window.close();
  };

  return (
    <div style={popupContainer}>
      <div style={contentStyle}>
        <h1>Solana Safari Extension Wallet Pop Up</h1>
        <p>This Popup UI is currently used for a debugging tool</p>
        <button onClick={simulateGetAccountsRequest}>
          Simulate Get Accounts Request
        </button>
        <button onClick={simulatePrintWindow}>Simulate Print Window</button>
        <button onClick={simulateWindowClose}>Close</button>
      </div>
    </div>
  );
}
