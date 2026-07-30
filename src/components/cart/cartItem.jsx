import { decQuantity, incQuantity, removeFromCart } from "@/redux/slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFromCart(item.id));
  };
  
  return (
    <div className="flex gap-4 border-b py-4">
      {/* <img src={item.image} className="w-20 h-20" /> */}

      <div>
        <h2>{item.title}</h2>
        <p>${item.price}</p>

        <button onClick={()=>{
            dispatch(decQuantity(item.id));
            console.log("dispatch minus")
        }}>-</button>
        <span>{item.stock}</span>
        <button onClick={()=>{
            dispatch(incQuantity(item.id));
            console.log("dispatch add")
        }} >+</button>

        <button onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
