
import "./App.css";
import React from "react";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./pages/Cart";


const App = () => {
  return (
   
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
           <Route path="/products/" element={<Products />} />
             <Route path="/products/:id" element={<ProductDetail/>} />
           <Route path="/cart" element={<Cart/>} />
        </Route>

      </Routes>

       



  );
};
export default App;
