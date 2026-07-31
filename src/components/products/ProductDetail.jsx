import { getProductById } from "@/services/productServices";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectImg, setSlectImg] = useState(null);

  const fetchProducts = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };
  console.log(product);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!product) {
    return (
      <h1 className="flex justify-center text-2xl text-gray-800">
        Loading....
      </h1>
    );
  }

  return (
    <div className="flex gap-6">
      <div className="w-1/2">
        {selectImg ? <img src={selectImg} /> : <img src={product.thumbnail} />}

        <div className="flex gap-2">
          {product?.images?.map((image, idx) => (
            <div onClick={() => setSlectImg(image)} key={idx} className="">
              <img src={image} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2">
        <h1 className="text-2xl font-bold "> {product.title}</h1>
        <p className="text-sm font-medium">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
