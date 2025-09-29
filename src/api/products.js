import config from "@/config";
import axios from "axios";

async function getProducts(){
return await axios.get(`${config.apiUrl}/api/products`);
}

export { getProducts };
