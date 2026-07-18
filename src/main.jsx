import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/counterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
);
