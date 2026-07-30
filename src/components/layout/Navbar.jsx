import { CarTaxiFront, ShoppingBag } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
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
    <header className="w-full bg-lime-400">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <h1 className="font-bold text-base ">Dookan</h1>
        <nav className=" flex gap-6 items-center ">
          {list.map((itm, idx) => (
            <NavLink key={idx} to={itm.path} className="text-lg font-medium ">
              {itm.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative">
          <Link to="cart">
            <ShoppingBag />
            <div className="absolute -top-2 -right-4 bg-red-500 px-2 py-0.5 rounded-full text-white">
              <span>{items.length}</span>
            </div>
          </Link>
        </div>

        <div>
          <button className="bg-gray-200 px-3 rounded-full py-1 text-base font-medium">
            Sign IN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
