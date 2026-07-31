import ProductCard from "@/components/products/ProductCard";
import ProductsFilters from "@/components/products/ProductsFilters";
import Button from "@/components/ui/Button";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import React, { useState } from "react";

const Products = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);
  console.log(debouncedSearch);
  const categories = ["all", ...new Set(products.map((itm) => itm.category))];

  const filteredproducts = products
    .filter((itm) =>
      itm.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    )
    .filter((itm) => (category === "all" ? true : itm.category === category));

  // Pagination-----------------------------------

  const productsPerPage = 10;
  const totalPages = Math.ceil(filteredproducts.length / productsPerPage);
  console.log(products.length, totalPages);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  if (loading)
    return (
      <h1 className="flex justify-center text-2xl text-gray-800">
        Loading....
      </h1>
    );

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
        {filteredproducts.slice(startIndex, endIndex).map((itm, idx) => (
          <ProductCard key={itm.id || idx} product={itm} />
        ))}
      </div>

      <div className="flex justify-center gap-6">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </Button>
        <span>{currentPage}</span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Products;
