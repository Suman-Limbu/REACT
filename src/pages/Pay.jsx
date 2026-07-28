import Table from "@/components/ui/Table";
import { View } from "lucide-react";
import React from "react";

const Pay = () => {
  const products = [
    {
      id: "p1",
      name: "Wireless Mouse",
      price: 25.99,
      qty: 3,
      status: "active",
      actions: <View />,
    },
    {
      id: "p2",
      name: "Mechanical Keyboard",
      price: 79.5,
      qty: 1,
      status: "inactive",
      actions: <View />,
    },
    {
      id: "p3",
      name: "USB-C Hub",
      price: 34.0,
      qty: 2,
      status: "active",
      actions: <View />,
    },
    {
      id: "p3",
      name: "USB-C Hub",
      price: 34.0,
      qty: 4,
      status: "inactive",
      actions: <View />,
    },
  ];

  const productsColumns = [
    { header: "Title", accessor: (item) => item.name },
    { header: "total unit price", accessor: (item) => item.price },
    { header: "Quantitiy", accessor: (item) => item.qty },
    { header: "Actions", accessor: (item) => <button>{item.actions}</button> },
    {
      header: "Status",
      accessor: (item) => (
        <span
          className={item.status === "active" ? "bg-green-400" : "bg-red-400"}
        >
          {item.status}
        </span>
      ),
    },
  ];

  const inventory = [
    {
      id: "p1",
      name: "Wireless Mouse",
      price: 25.99,
      qty: 3,
      address: { city: "barighau" },
    },
    {
      id: "p2",
      name: "Mechanical Keyboard",
      price: 79.5,
      qty: 1,
      address: "btm",
    },
    {
      id: "p3",
      name: "USB-C Hub",
      price: 34.0,
      qty: 2,
      address: { city: "charali" },
    },
    { id: "p3", name: "USB-C Hub", price: 34.0, qty: 4, address: "chai" },
    {
      id: "p3",
      name: "USB-C Hub",
      price: 34.0,
      qty: 2,
      address: { city: "charali"},
    },
    { id: "p3", name: "USB-C Hub", price: 34.0, qty: 4, address: "chai" },
  ];

  const inventoryColumns = [
    { header: "Title", accessor: (item) => item.name },
    { header: "total unit price", accessor: (item) => item.price },
    { header: "Quantitiy", accessor: (item) => item.qty },
    {
      header: "address",
      accessor: (item) => {
        const address = item.address;
        if (typeof address === "string") {
          return address;
        }
        if (typeof address === "object" && address != null) {
          return `${address.city}`;
        }
        return "-";
      },
    },
  ];

  return (
    <>
      <Table data={products} columns={productsColumns}  />
      <Table data={inventory} columns={inventoryColumns}  variant="blue"/>
    </>
  );
};

export default Pay;
