import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from 'react'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";

const App = () => {
  return (


<div>
      <Navbar/>
   <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/blogs" element={<Blogs/>}/>

   </Routes>
</div>
  )
}

export default App
