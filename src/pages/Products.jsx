import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "@/services/ProductService";
import ProductsFilters from "@/components/products/ProductsFilters";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("");
  const categories = products.map((product) => product.category);
  // console.log(categories)
  //fetching products----------------------------------------------------------------------------------------
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

  //filters-----------------------------------------------------------------------------------------------------
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(
      (product) => (category == "all" ? true : product.category === category),
    );

  // const filteredProducts = products
  // .filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // )
  // .filter((product) =>
  //   category === "all" ? true : product.category === category
  // )

  if (loading)
    return (
      <p className="text-3xl font-bold text-lime-500 loading animate-pulse duration-100">
        Loading...
      </p>
    );
  return (
    <>
      <ProductsFilters
        search={search}
        setSearch={setSearch}
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <div className="grid grid-cols-5 gap-4">
        {filteredProducts?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
