import { getProducts } from "@/services/productServices";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.err(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, loading };
};
