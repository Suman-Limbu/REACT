import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const dispatch = useDispatch();
  const { count, cube } = useSelector((state) => state.counter);

  function increaseCounter() {
    dispatch(increment());
  }
  function decreaseCounter() {
    dispatch(decrement());
  }

  return (
    <div style={{ border: "1px solid ", padding: "1rem" }}>
      <h1>ComponentA</h1>
      <div style={{ border: "1px solid ", padding: "1rem" }}>
        <button onClick={increaseCounter}>increase</button>
        <button onClick={decreaseCounter}>decrease</button>
      </div>
      <span>valueA:{count}</span>
      <span>valueC:{cube}</span>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
