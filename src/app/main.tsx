import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import "@systemvetardagen/react-ui/styles.css";
import App from "./App";

import i18next from "@/lib/i18n"
import { I18nextProvider } from "react-i18next";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </I18nextProvider>
);
