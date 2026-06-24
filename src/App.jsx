import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Memo from "./Memo";
import Products from "./pages/Products";



const App = () => {
const [count,setCount]=useState(0);
  return (
    <div className="bg-red-400">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/course" element={<Course />} />
         <Route path="/products" element={<Products />} />
      </Routes>

    </div>
  );
};

export default App;
