import ProductCard from "@/components/products/ProductCard";
import ProductsFilters from "@/components/products/ProductsFilters";
import { getProducts } from "@/services/ProductService";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((itm) => itm.category))];
  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredproducts = products
    .filter((itm) => itm.title.toLowerCase().includes(search.toLowerCase()))
    .filter((itm) => (category === "all" ? true : itm.category === category));

  return (
    <div className="flex flex-col ">
      <ProductsFilters
        categories={categories}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <div className="grid grid-cols-4 gap-6 m-6">
        {filteredproducts.map((itm, idx) => (
          <ProductCard key={itm.id || idx} product={itm} />
        ))}
      </div>
    </div>
  );
};

export default Products;
