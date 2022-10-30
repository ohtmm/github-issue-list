import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./lib/styles/Globalstyle";
import IssueContextProvder from "./lib/states/IssueProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IssueContextProvder>
      <GlobalStyle />

      <App />
    </IssueContextProvder>
  </React.StrictMode>
);
