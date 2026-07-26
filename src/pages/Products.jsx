import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "@/services/ProductService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  if (loading)
    return (
      <p className="text-3xl font-bold text-lime-500 loading animate-pulse duration-100">
        Loading...
      </p>
    );
  return (
    <div className="grid grid-cols-5 gap-4">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
