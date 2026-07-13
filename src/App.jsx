import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from 'react'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (


<div>
   <Routes>

<Route path="/" element={<Home/>}/>

   </Routes>
</div>
  )
}

export default App
