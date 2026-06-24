import React from "react";

const Products = () => {
const pro=fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>data.products);
 console.log(pro)   

  return <div>Products</div>;
};

export default Products;
