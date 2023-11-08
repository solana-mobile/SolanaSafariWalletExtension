/**
 * This is a popup view
 * This script is bundled and imported by
 * popup.html
 */

import React from "react";
import ReactDOM from "react-dom";
import ApprovalScreen from "./Approval/ApprovalScreen";

ReactDOM.render(
  <React.StrictMode>
    <ApprovalScreen />
  </React.StrictMode>,
  document.getElementById("root")
);
