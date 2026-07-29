import { Eye, Printer } from "lucide-react";

// this was total data whcih only contains billings data not sales

// type data = {
//   id: number;
//   invoice_no: string;
//   created_at: string;
//   customerId: string;
//   table_number: string;
//   qty: number;
//   subtotal: number;
//   discount: number;
//   vat_amount: number;
//   payment_status: string;
//   grand_total: number;
// };

//made separate billingData abd salesData and combine in TableDataProps

// type BillingData = {
//   id: number;
//   invoice_no: string;
//   created_at: string;
//   customerId: string;
//   table_number: string;
//   qty: number;
//   subtotal: number;
//   discount: number;
//   vat_amount: number;
//   payment_status: string;
//   grand_total: number;
// };

// type SalesData = {
//   id: number;
//   invoice_no: string;
//   created_at: string;
//   buyerName: string;
//   buyerPANVAT: string;
//   totalSales: number;
//   ExemptedSales: number;
//   TaxableAmount: number;
//   vatAmount: number;
// };

// type TableDataProps =
//   | {
//       tableBody: "Billing";
//       data: BillingData[];
//       tableHeadData: string[];
//       showFooter: boolean;
//     }
//   | {
//       tableBody: "Sales";
//       data: SalesData[];
//       tableHeadData: string[];
//       showFooter: boolean;
//     };

const Table = ({ columns, data,footer }) => {
  return (
    <div className="">
      <table className="w-full text-xs text-black/80 bg-white border-collapse border">
        <thead>
          <tr className="bg-emerald-100 text-center">
            {columns.map((itm, idx) => (
              <th key={idx} className="border-gray-300/50 border p-2">
                {itm.header}
              </th>
            

            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id || index}
              className={`text-center border border-gray-300 ${
                index % 2 === 0 ? "bg-white" : "bg-blue-50/50"
              }`}
            >
              {columns.map((itm, idx) => (
                <td className="p-2 border border-gray-300/50 whitespace-nowrap">
                  {itm.accessor(row)}
                </td>
              ))}

              {/* {bill.payment_status ? (
                  <td className="p-2 border border-gray-300/50">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-[10px] font-semibold uppercase">
                      {bill.payment_status}
                    </span>
                  </td>
                ) : (
                  ""
                )} */}

              {/* <td className="p-2  border border-gray-300/50">
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
                </td> */}
            </tr>
          ))}
          {/* 
          {dataTable.length === 0 && (
            <tr>
              <td colSpan={11} className="text-center py-8 text-gray-400">
                No paid invoices found.
              </td>
            </tr>
          )} */}
        </tbody>
        {footer && (
  <tfoot>
    {footer()}
  </tfoot>
)}

        {/* {showFooter && (
          <tfoot>
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
          </tfoot>
        )} */}
      </table>
    </div>
  );
};

export default Table;
