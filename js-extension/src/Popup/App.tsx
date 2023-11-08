import React from "react";

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
    console.log("Keypair fetch click");
    browser.runtime.sendNativeMessage(
      "id",
      "fetch-keypair",
      function (response: any) {
        console.log("Received sendNativeMessage response:");
        console.log(response);
      }
    );
  };

  return (
    <div style={popupContainer}>
      <div style={contentStyle}>
        <h1>Solana Safari Extension Wallet Pop Up</h1>
        <p>This Popup UI is currently used for a debugging tool</p>
        <button onClick={fetchKeypair}>Fetch Keypair</button>
      </div>
    </div>
  );
}
