import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { HashRouter as Router } from "react-router-dom";

import { GlobalStyles } from "./globalStyles";

render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
