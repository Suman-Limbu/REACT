import { getProducts } from "@/api/products.js";
import ProductCard from "../_components/Card.js";
export const metadata = {
  title: "Products",
  keywords: "best electronic products online",
};

const Products = async ({}) => {
  const response = await getProducts();
  const products = response.data;

  return (
    <>
<h1 className="text-4xl px-4 pb-3 font-medium">Popular Products</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
       
      </div>
    </>
     
    
  );
};

export default Products;
