import imagePlaceholder from "@/assets/images/products/placeholder.png";
import Image from "next/image";

export const LoadingCard = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-md rounded-2xl animate-pulse ease-in-out duration-150">
      <Image
        src={imagePlaceholder}
        className=" w-full h-48 object-cover rounded-t-lg"
        height={400}
        width={500}
        alt=""
      />
      <div className="px-4 py-3">
        <div className="w-full h-8 bg-gray-600 rounded-md"></div>
          <div className="w-1/3 h-3 mt-2.5 bg-yellow-500 rounded-md"></div>
        <div className="flex items-center gap-2 text-sm py-2 justify-between">
          
          <div className="flex items-center gap-2 ">
            <span className="bg-blue-600 px-3 mt-2.5 rounded-3xl  w-18 h-5"></span>
          <span className="bg-gray-400 px-3 mt-2.5 rounded-3xl  w-18 h-5"></span></div>
          <button className="px-3 py-2 w-2 h-5 mt-2 rounded-md bg-blue-600 text-white shadow"></button>
        </div>
       
        
      </div>
    </div>
  );
};

const LoadingProducts = () => {
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    
  );
};

export default LoadingProducts;
