import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";

const ProductsFilters = ({
  search,
  setSearch,
  categories,
  setCategory,
  category,
}) => {
  console.log(category);
  return (
    <div>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />

      <Select
        options={categories}
        onClick={(e) => setCategory(e.target.value)}
      />
    </div>
  );
};

export default ProductsFilters;
