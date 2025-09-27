import ProductCard from "../_components/Card.js";
export const metadata = {
  title: "Products",
  keywords: "best electronic products online",
};

const Products = async ({searchParams}) => {
  const query=await searchParams;
  const products = await fetch(
    `https://node-20250302.vercel.app/api/products`
  ).then((res) => res?.json());
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
