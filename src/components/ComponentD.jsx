import { useDispatch } from "react-redux";
import { incrementByValue } from "../redux/counterSlice";

const ComponentC = ({numC}) => {
 const dispatch=useDispatch();


  function increaseByValue(){
dispatch(incrementByValue(5));
  }
  return (
    <div style={{border:"1px solid "}}>
      <h1>ComponentD</h1>
    
<button onClick={increaseByValue}>click</button>
    
    </div>
  )
}

export default ComponentC;