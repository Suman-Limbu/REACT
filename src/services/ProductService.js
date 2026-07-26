import axios from "axios";
const API = "https://dummyjson.com/products";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(API);
    return data.products;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API}/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch product with id ${id} `, error);
    throw error;
  }
};
