import React, { useState } from "react";
import Input from "./components/input";
import "./App.css"

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
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
