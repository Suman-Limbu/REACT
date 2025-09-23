import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./Card";
import ComponentA from "./components/ComponentA";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(count);
    console.log(titleRef);
  },
  [count]
  );
  const inputRef=useRef(null);
  const titleRef=useRef(null);
  return (
    <div>
      <span>count:{count}</span>
       <ComponentA />
     
      <button
        onClick={() => {
          inputRef.current.focus();
          setCount(count+1);
        }}
      >
        click
      </button>
      <input type="text" id="one" ref={inputRef}></input>
      <h1 ref={titleRef}>hello world</h1>
      <Card title="Samsung Galaxy S24" brand="Samsung" price="1800" />
      <Card title="onePlus Nord" brand="onePlus" price={1990} />
      <Card title="Iphone 17" brand="Apple" price={1499} />
     
    </div>
  );
}
