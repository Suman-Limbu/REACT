import React, { useState } from "react";
import Input from "./components/input";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div className="flex items-center justify-center">
      <h1 className="">To-Do List</h1>
      <Input list={list} setList={setList} />
   <div>
       {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
   </div>
    </div>
  );
};

export default App;
