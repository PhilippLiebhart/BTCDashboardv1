import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import DashboardContextProvider from "./context/DashboardContext";

import "normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
