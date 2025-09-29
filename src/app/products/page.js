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
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-4 gap-3">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
