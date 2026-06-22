import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const list = [
    {
      label: "Lyrio agent",
      path: "/",
    },
    {
      label: "Product",
      path: "/blogs",
    },
    {
      label: "Pricing",
      path: "/course",
    },
        {
      label: "Solutions",
      path: "/course",
    },
        {
      label: "Resources",
      path: "/course",
    },
    
  ];

  return (
    <div className="w-full">





      <div className="max-w-7xl mx-auto flex justify-between py-6">
        {list.map((itm)=>
         <p className="text-lg font-medium">{itm.label}</p>
        )}
       


      </div>
    </div>
  );
};

export default Navbar;
