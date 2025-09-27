const ProductLayout = ({ children }) => {
  return (
    <div>
      {children}

      <h1 className="text-3xl py-5">Related Products</h1>
    </div>
  );
};

export default ProductLayout;
