import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");

    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((itm, idx) => (
        <div key={idx}>
          {itm.price}
          {itm.title}
        </div>
      ))}
    </div>
  );
};

export default Home;
