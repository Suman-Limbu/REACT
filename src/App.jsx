
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";


const App = () => {
  return (


<Routes>
<Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
</Route>
</Routes>


  );
};
export default App;
