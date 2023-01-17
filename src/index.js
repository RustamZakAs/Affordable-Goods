import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const element = document.body.querySelector("#root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
