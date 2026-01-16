import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./Card";
import ComponentA from "./components/ComponentA";
import ProductsTable from "./components/ProductsTable";

export default function App() {
  const [submit, setSubmit] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting....");
  };
  return (
    <>
      {submit}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={submit}
          placeholder="submit your name"
          onChange={(e) => setSubmit(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
