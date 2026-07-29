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
