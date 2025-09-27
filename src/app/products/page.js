import ProductCard from "../_components/Card.js";


const Products = async ({ params }) => {
  const products = await fetch(
    `https://mern-20250622.vercel.app/api/products`
  ).then((res) => res?.json());
  return (
<div className="container mx-auto py-5 px-4"><div className="grid grid-cols-4 gap-3">
    {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div></div>



  );
};

export default Products;
