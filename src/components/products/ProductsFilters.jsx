import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";

const ProductsFilters = ({
  search,
  setSearch,
  category,
  categories,
  setCategory,
  price,
  setPrice,
  maxPrice
}) => {
  return (
    <div>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Input label={price}
        type="range"
        min={0}
        max={maxPrice}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
     
      <Select options={categories} onChange={(value) => setCategory(value)} />
    </div>
  );
};

export default ProductsFilters;
