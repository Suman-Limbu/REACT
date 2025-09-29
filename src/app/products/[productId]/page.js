import config from "@/config";

async function GetProductById(productId) {
  const product = await fetch(
    `${config.apiUrl}/api/products/${productId}`
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error("product not found");
    });
  return product;
}
export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const product =await GetProductById(productId);
  return {
    title: product?.name,
    keywords: `${product?.name},${product?.brand},${product?.category}`,
  };
};

const productDetails = async ({ params }) => {
  const productId = (await params).productId;

  const product =await GetProductById(productId);

  return (
    <div>
      <h1 className="text-4xl">productDetails: {productId}</h1>
      <ul>
        <li>{product?.name}</li>
        <li>{product?.brand}</li>
        <li>{product?.price}</li>
        <li>{product?.description}</li>
      </ul>
    </div>
  );
};

export default productDetails;
