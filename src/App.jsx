import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import ProductDetail from "./components/products/ProductDetail";


const App = () => {
  return (
   
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
           <Route path="/products/" element={<Products />} />
             <Route path="/products/:id" element={<ProductDetail />} />
         
        </Route>

      </Routes>

  );
};
export default App;
