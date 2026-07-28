import Table from "@/components/ui/Table";
import React from "react";

const Demo = () => {
  const products = [
    { id: "p1", name: "Wireless Mouse", price: 25.99, qty: 3 },
    { id: "p2", name: "Mechanical Keyboard", price: 79.5, qty: 1 },
    { id: "p3", name: "USB-C Hub", price: 34.0, qty: 2 },
  ];

  const productColumns = [
    { header: "Product", accessor: (item) => item.name },
    { header: "Unit Price", accessor: (item) => `$${item.price.toFixed(2)}` },
    { header: "Qty", accessor: (item) => item.qty },
  ];

  const inventory = [
    { id: "i1", itemName: "Steel Bolt (M6)", cost: 0.12, stock: 5000 },
    { id: "i2", itemName: "Rubber Gasket", cost: 0.45, stock: 1200 },
    { id: "i3", itemName: "Aluminum Bracket", cost: 3.2, stock: 340 },
  ];
  const inventoryColumns = [
    { header: "Title", accessor: (item) => item.itemName },
    { header: "cost", accessor: (item) => item.cost },
    { header: "sotck", accessor: (item) => item.stock },
  ];

  // const inventoryColumns = [
  //   { header: "Item", accessor: (item) => item.itemName },
  //   { header: "Unit Cost", accessor: (item) => `$${item.cost.toFixed(2)}` },
  //   { header: "Stock", accessor: (item) => item.stock },
  // ];
  return (
    <div>
      <Table columns={productColumns} data={products} />
      <Table columns={inventoryColumns} data={inventory} />
    </div>
  );
};

export default Demo;
