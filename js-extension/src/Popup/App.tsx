import React from "react";

export default function App() {
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // for full viewport height centering
    backgroundColor: "#f4f4f4" // background color for the entire viewport
  };

  const contentStyle = {
    backgroundColor: "white", // background color of the card
    padding: "20px 40px",
    borderRadius: "10px", // to make it rounded
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // some shadow for the floating effect
  };

  const getCurrentTabs = () => {
    console.log("Get Current Tabs");
  };

  const tabsClick1 = () => {
    console.log("Tabs Click 1");
    browser.tabs
      .create({
        url: "popup.html"
      })
      .then((tab) => {
        console.log("tab promise fulfilled");
      });
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
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h1>React App Popup</h1>
        <button onClick={getCurrentTabs}>Get Current Tabs</button>
        <button onClick={fetchKeypair}>Fetch Keypair</button>
        <button onClick={tabsClick1}>Tabs 1</button>
      </div>
    </div>
  );
}
