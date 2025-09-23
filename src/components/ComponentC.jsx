import { useSelector } from "react-redux";
import ComponentD from "../components/ComponentD";
const ComponentC = ({ numC }) => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div style={{ border: "1px solid " }}>
      <h1>ComponentC</h1>
      <span>value of A:{count}</span>
      <span>value of C:{count * count * count}</span>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
