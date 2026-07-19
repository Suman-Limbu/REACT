import Select from "@/components/ui/Select";
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
  const [country, setCountry] = useState("");

  return (
    <>
      <div className=" p-5">
        <Select
          label="Country"
          required
          variant="outline"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          options={countries}
        >
          choose
        </Select>
      </div>
    </>
  );
};

export default Home;
