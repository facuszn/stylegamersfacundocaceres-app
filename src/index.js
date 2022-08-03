import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { getFirestoreApp } from "./FireBase/FireBase";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

getFirestoreApp();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
