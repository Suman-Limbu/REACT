import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";


// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import  CartProvider  from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
      <App />

  </BrowserRouter>,
);
