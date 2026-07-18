import { useCount } from "@/context/counterContext";
import React from "react";

const Home = () => {
  const { count, setCount, inc } = useCount();
  const handleCount = () => {};
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCount}>inc</button>
    </>
  );
};

export default Home;
