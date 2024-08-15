import axios from "axios";
import { Product } from "../types";

const API_URL =
  "https://my-json-server.typicode.com/benirvingplt/products/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
