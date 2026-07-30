import Table from "@/components/ui/Table";
import { dataTable, salesData } from "@/mock/MockData";
import { Eye, Printer } from "lucide-react";
import React from "react";

const Demo = () => {
  const billingColumns = [
    { header: "Date", accessor: (item) => item.created_at },
    { header: "Invoice", accessor: (item) => item.invoice_no },
    { header: "Customer", accessor: (item) => item.customerId },
    { header: "Quantity", accessor: (item) => item.qty },
    { header: "Gross", accessor: (item) => item.subtotal },
    { header: "Discount", accessor: (item) => item.discount },
    { header: "VAT", accessor: (item) => item.vat_amount },
    {
      header: "Payment Status",
      accessor: (item) => (
        <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-[10px] font-semibold uppercase">
          {item.payment_status}
        </span>
      ),
    },
    {
      header: "Net",
      accessor: (item) => (
        <span className="p-2  font-bold">{item.grand_total}</span>
      ),
    },
    {
      header: "Actions",
      accessor: (item) => (
        <span>
          <button
            //   onClick={() => {
            //     setOpenCheckout(true);
            //     selectOrder(bill);
            //   }}
            className="group p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Print Invoice"
          >
            <Printer className="cursor-pointer size-4 text-gray-600 group-hover:text-green-600 group-hover:scale-110 transition-all" />
          </button>
          <button
            //   onClick={() => {
            //     setOpenCheckout(true);
            //     selectOrder(bill);
            //   }}
            className="group p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Print Invoice"
          >
            <Eye className="cursor-pointer size-4 text-gray-600 group-hover:text-green-600 group-hover:scale-110 transition-all" />
          </button>
        </span>
      ),
    },
  ];

  const SalesColumns = [
    { header: "Date", accessor: (item) => item.created_at },
    { header: "Invoice", accessor: (item) => item.invoice_no },
    { header: "Customers", accessor: (item) => item.buyerName },
    { header: "Pan/Vat", accessor: (item) => item.buyerPANVAT },
    { header: "Exempted", accessor: (item) => item.ExemptedSales },
    { header: "Sales", accessor: (item) => item.totalSales },
    { header: "Taxable Amount", accessor: (item) => item.TaxableAmount },
    { header: "Vat Amount", accessor: (item) => item.vatAmount },
    { header: "Total", accessor: (item) => item.totalSales },
    {
      header: "Actions",
      accessor: (item) => (
        <span>
          <button
            //   onClick={() => {
            //     setOpenCheckout(true);
            //     selectOrder(bill);
            //   }}
            className="group p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Print Invoice"
          >
            <Printer className="cursor-pointer size-4 text-gray-600 group-hover:text-green-600 group-hover:scale-110 transition-all" />
          </button>
          <button
            //   onClick={() => {
            //     setOpenCheckout(true);
            //     selectOrder(bill);
            //   }}
            className="group p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Print Invoice"
          >
            <Eye className="cursor-pointer size-4 text-gray-600 group-hover:text-green-600 group-hover:scale-110 transition-all" />
          </button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={billingColumns}
        data={dataTable}
        footer={() => (
          <tr className="bg-emerald-100">
            <td
              colSpan={8}
              className="p-2 border border-gray-300/50 font-bold "
            >
              Total
            </td>
            <td
              colSpan={2}
              className="p-2 border border-gray-300/50 font-bold text-center"
            >
              1200
            </td>
          </tr>
        )}
      />
      <Table columns={SalesColumns} data={salesData} />
    </div>
  );
};

export default Demo;








// import { getProductById } from "@/services/ProductService";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectImg, setSelectImg] = useState(null);

//   useEffect(() => {
//     const loadProductById = async () => {
//       try {
//         const result = await getProductById(id);
//         setProduct(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadProductById();
//   }, [id]);

//   return (
//     <div className="container mx-auto px-6 py-10">
//       {/* Breadcrumb */}
//       <p className="text-sm text-gray-500 mb-6">Home / Products / Smartphone</p>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Left */}
//         <div>
//           {/* Main Image */}
//           {selectImg ? (
//             <img src={selectImg} className="w-full rounded-xl border" />
//           ) : (
//             <img
//               src={product?.thumbnail}
//               className="w-full rounded-xl border"
//             />
//           )}

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4">
//             {product?.images.map((img) => (
//               <img
//                 onClick={() => setSelectImg(img)}
//                 key={product.id}
//                 src={img}
//                 className="w-20 h-20 border rounded cursor-pointer hover:border-blue-500"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right */}
//         <div>
//           <h1 className="text-3xl font-bold">{product?.title}</h1>

//           <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ ({product?.rating})</p>

//           <div className="mt-5">
//             <h2 className="text-4xl font-bold text-blue-600">
//               ${product?.price}
//             </h2>
//           </div>

//           <p className="text-gray-600 mt-6">{product?.description}</p>

//           <div className="space-y-3 mt-8">
//             <p>
//               <span className="font-semibold">Brand:</span> {product?.brand}
//             </p>

//             <p>
//               <span className="font-semibold">Category:</span>{" "}
//               {product?.category}
//             </p>

//             <p>
//               <span className="font-semibold">Stock:</span> {product?.stock}
//             </p>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center gap-4 mt-8">
//             <button className="w-10 h-10 border rounded">-</button>

//             <span className="text-xl">1</span>

//             <button className="w-10 h-10 border rounded">+</button>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-8">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded">
//               Add to Cart
//             </button>

//             <button className="border px-8 py-3 rounded">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
