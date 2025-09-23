import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByValue } from "../redux/counterSlice";

const ComponentD = ({ numC }) => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  function increaseByValue() {
    dispatch(incrementByValue(parseInt(value)));
  }
  return (
    <div style={{ border: "1px solid " }}>
      <h1>ComponentD</h1>
      <input
        type="text"
        id=""
        name=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>

      <button onClick={increaseByValue}>click</button>
    </div>
  );
};

export default ComponentD;
