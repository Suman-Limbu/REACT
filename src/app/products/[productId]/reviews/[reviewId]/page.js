
const reviewDetails =async ({params}) => {
    const reviewId=(await params).reviewId;
    const productId=(await params).productId;
  return (
    <div>
        <h1 className="text-4xl">productDetails: {productId}</h1>
        <h2 className="text-4xl">reviewDetails:{reviewId}</h2>
        
        </div>
  )
}

export default reviewDetails;