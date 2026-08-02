import ProductCard from "@/components/products/ProductCard";
import ProductsFilters from "@/components/products/ProductsFilters";
import Button from "@/components/ui/Button";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";

import { useEffect, useMemo, useState } from "react";

const Products = () => {
  const { products, isLoading } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);
  console.log(debouncedSearch);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const maxPrice = Math.max(...products.map((product) => product.price));

  useEffect(() => {
    setPrice(Math.max(...products.map((product) => product.price)));
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchCategory = category === "all" || product.category === category;
    const matchprice = price === "" || product.price <= price;

    return matchSearch && matchCategory && matchprice;
  });
  const productsPerPage = 10;

  const totalPages = filteredProducts.length / productsPerPage;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  if (isLoading) {
    return <p className="font-bold text-4xl text-red-600">Loading..</p>;
  }

  return (
    <div>
      <ProductsFilters
        search={search}
        setSearch={setSearch}
        category={category}
        categories={categories}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        maxPrice={maxPrice}
      />
      {filteredProducts.length === 0 && <span>No products found...</span>}
      <div className="grid grid-cols-4 gap-6 ">
        {filteredProducts.slice(startIndex, endIndex).map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>

      <div className="flex gap-3">
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>

        {currentPage}
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default Products;
