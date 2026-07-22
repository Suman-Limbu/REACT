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

  return (
    <header className="w-full h-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center ">
        {list.map((itm) => (
          <Link to={itm.path} className="text-lg font-medium bg-yellow-500">
            {itm.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
