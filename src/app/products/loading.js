
const LoadingCard = () => {
  return (
    <div className="border border-gray-100 shadow-md py-3 px-4 rounded-2xl animate-pulse ease-in-out duration-150" >
     <div className="w-full h-10 bg-gray-500 rounded-md"></div>
     <div className="flex items-center gap-2 text-sm py-2">
      <span className="bg-green-200 px-3 rounded-3xl w-18 h-5"></span>
      <span className="bg-blue-200 px-3 rounded-3xl  w-18 h-5"></span>
      
    </div>
      <p className="h-10 w-30 py-2 rounded-md bg-gray-100"></p>
    <button className="px-3 py-2 w-20 h-8 rounded-md bg-blue-500 text-white shadow"></button>
    </div>
  )
}


const LoadingProducts = () => {
  return (
    <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-4 gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        
        </div> </div>
  )
}

export default LoadingProducts;