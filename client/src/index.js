import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import DashboardContextProvider from "./context/DashboardContext";

import "normalize.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </Router>,
  document.getElementById("root")
);
