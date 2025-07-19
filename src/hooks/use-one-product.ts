'use client'
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/product-service";

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,

  })
};
