import axios from "axios";
import type { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async (category?: string|null): Promise<Product[]> => {
  const res = await axios.get<Product[]>(category?`${BASE_URL}/category/${category}`: BASE_URL);
  return res.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await axios.get<Product>(`${BASE_URL}/${id}`);
  return res.data;
};
