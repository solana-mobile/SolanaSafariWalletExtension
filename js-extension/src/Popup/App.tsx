import React from "react";
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

  const fetchKeypair = () => {
    browser.runtime.sendNativeMessage(
      "id",
      "fetch-keypair",
      function (response: any) {
        console.log("Received sendNativeMessage response:");
        console.log(response);
      }
    );
  };

  const simulateGetAccountsRequest = async () => {
    const response = await nativeGetAccounts();
    console.log(response);
  };

  const simulateNativeSignMessageRequest = () => {};

  const simulateNativeSignTransactionRequest = () => {};

  return (
    <div style={popupContainer}>
      <div style={contentStyle}>
        <h1>Solana Safari Extension Wallet Pop Up</h1>
        <p>This Popup UI is currently used for a debugging tool</p>
        <button onClick={fetchKeypair}>Fetch Keypair</button>
        <button onClick={simulateGetAccountsRequest}>
          Simulate Get Accounts Request
        </button>
        <button onClick={simulateNativeSignMessageRequest}>
          Simulate Native Sign Message Request
        </button>
        <button onClick={simulateNativeSignTransactionRequest}>
          Simulate Native Sign Transaction Request
        </button>
      </div>
    </div>
  );
}
