
const ProductCard = ({product}) => {
  return (
    <div className="border border-gray-100 shadow-md py-3 px-4 rounded-2xl">
      <h2 className="text-2xl font-semibold">{product.name}</h2>
    <div className="flex items-center gap-2 text-sm py-2">
      <span className="bg-green-200 text-green-600 px-3 rounded-3xl">{product.category}</span>
      <span className="bg-blue-200 text-blue-600 px-3 rounded-3xl">{product.brand}</span>
      
    </div>
    <p className="text-lg">Rs.{product.price}</p>
    <button className="px-3 py-2 rounded-md bg-blue-600 text-white shadow">Add to cart+</button>
    </div>
  )
}


export default ProductCard;