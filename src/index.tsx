import { render } from "react-dom";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "app/App";

import "shared/config/i18n/i18n";
import React from "react";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root"),
);
