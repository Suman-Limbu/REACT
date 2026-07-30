import CartItem from "@/components/cart/cartItem";
import { removeFromCart } from "@/redux/slices/CartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  if (items.length === 0) {
    return <h1 className="flex justify-center text-2xl text-gray-800">No items</h1>;
  }
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
