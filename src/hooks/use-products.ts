import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product-service";

export const useProducts = (category?: string|null) => {
    return useQuery({ queryKey:category? ["products", category] : ["products"], queryFn: () => fetchProducts(category) });
};
