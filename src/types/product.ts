export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export interface CartItem extends Product {
  quantity: number;
}

export type SizesProp = "XS" | "S" | "M" | "L" | "XL"|"XXL";