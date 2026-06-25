import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Memo from "./Memo";
import Products from "./pages/Products";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Login from "./pages/authPages/Login";
import Unauthorized from "./pages/Unauthorized";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-red-400">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/course" element={<Course />} />
        <Route element={<ProtectedRoutes allowedRoles={["Admi"]} />}>
          <Route path="/products" element={<Products />} />
           <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
