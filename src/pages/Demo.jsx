import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Demo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-6 w-1/2">
      <div
        onClick={() => setOpen(!open)}
        className="ring ring-gray-200 rounded-md shadow-md px-5 py-3 flex justify-between items-center cursor-pointer"
      >
        <p className="text-base font-bold text-gray-800">What is React?</p>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 font-medium">
          React is a JavaScript library for building user interfaces.
        </p>
      </div>
    </div>
  );
};

export default Demo;
