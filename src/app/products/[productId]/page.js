const productDetails = async ({ params,searchParams }) => {
  const productId = (await params).productId;
  const query= await searchParams;

  const product = await fetch(
    `https://mern-20250622.vercel.app/api/products/${productId}`
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error("product not found");
    });

  return (
    <div>
      <h1 className="text-4xl">productDetails: {productId}</h1>
      <ul>
        <li>{product.name}</li>
        <li>{product.brand}</li>
        <li>{product.price}</li>
        <li>{product.description}</li>
      </ul>
    </div>
  );
};

export default productDetails;
