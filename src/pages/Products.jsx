import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/products/producActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {products.map((itm) => (
        <div key={itm.id} className="bg-red-400">{itm.price}</div>
      ))}
    </div>
  );
};

export default Products;
