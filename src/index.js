import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StepContext } from "./StepContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StepContext>
    <App />
  </StepContext>
);
