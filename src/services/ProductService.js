import axios from "axios";

const API = "https://dummyjson.com/products";

export const getProducts = async () => {
  const { data } = await axios.get(`${API}`);
  return data.products;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${API}/${id}`);
  return data;
};
