import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import MainLayout from "./layout/MainLayout";
import Blogs from "./pages/Blogs";

const App = () => 
{
return (
  <div className="">
    <Routes>
      <Route  element={<MainLayout/>}>
      
         <Route path="/" element={<Home />} />
       <Route path="/blogs" element={<Blogs />} />
      
      
      </Route>
   
    </Routes>
  </div>
);
}
export default App;
