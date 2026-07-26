import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "@/services/ProductService";
import ProductsFilters from "@/components/products/ProductsFilters";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 10;

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);
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
    .filter((product) =>
      category == "all" ? true : product.category === category,
    );

  // const filteredProducts = products
  // .filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // )
  // .filter((product) =>
  //   category === "all" ? true : product.category === category
  // )


  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;

const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

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
        {paginatedProducts?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-4 py-2 border rounded disabled:opacity-50"
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-4 py-2 rounded ${
        currentPage === index + 1
          ? "bg-blue-500 text-white"
          : "border"
      }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }
    disabled={currentPage === totalPages}
    className="px-4 py-2 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
    </>
  );
};

export default Products;
