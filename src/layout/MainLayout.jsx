import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen space-y-8 w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
