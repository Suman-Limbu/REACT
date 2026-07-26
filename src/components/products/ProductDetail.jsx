import { getProductById } from "@/services/ProductService";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectImg, setSelectImg] = useState(null);

  useEffect(() => {
    const loadProductById = async () => {
      try {
        const result = await getProductById(id);
        setProduct(result);
      } catch (error) {
        console.error(error);
      }
    };
    loadProductById();
  }, [id]);

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">Home / Products / Smartphone</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          {/* Main Image */}
          {selectImg ? (
            <img src={selectImg} className="w-full rounded-xl border" />
          ) : (
            <img
              src={product?.thumbnail}
              className="w-full rounded-xl border"
            />
          )}

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {product?.images.map((img) => (
              <img
                onClick={() => setSelectImg(img)}
                key={product.id}
                src={img}
                className="w-20 h-20 border rounded cursor-pointer hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h1 className="text-3xl font-bold">{product?.title}</h1>

          <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ ({product?.rating})</p>

          <div className="mt-5">
            <h2 className="text-4xl font-bold text-blue-600">
              ${product?.price}
            </h2>
          </div>

          <p className="text-gray-600 mt-6">{product?.description}</p>

          <div className="space-y-3 mt-8">
            <p>
              <span className="font-semibold">Brand:</span> {product?.brand}
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product?.category}
            </p>

            <p>
              <span className="font-semibold">Stock:</span> {product?.stock}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-8">
            <button className="w-10 h-10 border rounded">-</button>

            <span className="text-xl">1</span>

            <button className="w-10 h-10 border rounded">+</button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded">
              Add to Cart
            </button>

            <button className="border px-8 py-3 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
