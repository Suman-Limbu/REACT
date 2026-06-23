import React, { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="bg-blue-500 h-10 w-full flex gap-3 items-center justify-center">
        <button className="bg-green-400 rounded-2xl px-2 py-0.5 font-light text-sm ">
          show me how
        </button>
        <p className="text-white text-sm ">
          Turn Every Product Question Into sales With Trile Ai
        </p>
      </div>

      <div className="flex justify-end gap-10 py-6 max-w-7xl mx-auto">
        <p className="text-gray-400 font-semibold">EN</p>
        <button className="hover:underline hover:underline-offset-5 font-semibold">
          Log in
        </button>
      </div>
      <div
        className={`sticky top-0 w-full transition-all duration-300 ${
          isSticky
            ? " shadow-md border-b bg-white/80 backdrop-blur-md"
            : " bg-gray-400"
        }`}
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
