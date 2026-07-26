import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // const { addToCart } = useCart();
  return (
    <div className="border rounded-sm p-2 space-y-4">
      <div className=" flex items-center justify-center  border border-gray-200 rounded-sm">
        <Link to={`${product.id}`}>
          <img src={product.images[0]} className="size-35" />
        </Link>
      </div>
      <h2 className=" font-bold">
        <Link to={`${product.id}`}>{product.title}</Link>
      </h2>
      <div className="flex gap-2">
        <span className="py-1 px-2 rounded-full bg-black text-white font-normal">
          Rs.{product.price}
        </span>
        <span className="py-1 px-2 rounded-full bg-gray-300 text-black font-normal">
          {product.category}
        </span>
      </div>
      <Button  variant="lime">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
