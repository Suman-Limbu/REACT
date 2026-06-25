import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/products/productSlice.jsx";
import authReducer from "./features/auth/authSlice.jsx"
export const store = configureStore({
  reducer: { auth: authReducer, product: productReducer },
});
