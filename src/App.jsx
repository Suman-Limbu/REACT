import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";

const App = () => 
{
return (
  <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);
}
export default App;
