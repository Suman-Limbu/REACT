import Button from "@/components/ui/button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useTheme } from "@/context/ThemeContext";


import React, { useState } from "react";

const Home = () => {
  const countries = [
    // {
    //   label: "Nepal",
    //   value: "np",
    // },
    // {
    //   label: "India",
    //   value: "in",
    // },
    // {
    //   label: "USA",
    //   value: "us",
    // },

    "apple",
    "ball",
    "cat",
    "dog",
    "cow",
    "goat",
  ];
  const {theme}= useTheme();
  console.log(theme)
    const [country, setCountry] = useState("");

  return (
    <>
      <div className=" p-5 space-y-6">

      </div>
    </>
  );
};

export default Home;
