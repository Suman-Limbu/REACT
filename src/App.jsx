import React, { useState } from "react";
import Input from "./components/input";
import "./App.css"
import Board from './components/Board';

const App = () => {
  const [list, setList] = useState([]);
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="">To-Do List</h1>
      <Input list={list} setList={setList} />
      </div>
   <div className="grid grid-cols-3 gap-4">
       {list.map((item, index) => (
        <Board key={index} item={item}/>
      ))}
   </div></>
    
  );
};

export default App;
