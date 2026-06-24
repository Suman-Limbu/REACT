import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const list = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "blogs",
      path: "/blogs",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Course",
      path: "/course",
    },
    {
      label: "Resources",
      path: "/resources",
    },
  ];

  const handle = () => {
    alert("world");
  };

  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto flex justify-between py-6 bg-green-500">
        
        {list.map((itm) => (
          <Link
           to={itm.path}
            className="text-lg font-medium bg-yellow-500"
          >
            {itm.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
