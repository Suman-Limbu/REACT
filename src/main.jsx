import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import  CartProvider  from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
);
