import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../types/product";


interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) {
      const { product, quantity } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }

      state.totalQuantity += quantity;
      state.totalPrice += product.price * quantity;
    },
     removeFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const item = state.items.find((item) => item.id === productId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== productId);
      }
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        state.totalQuantity += action.payload.quantity - item.quantity;
        state.totalPrice +=
          item.price * (action.payload.quantity - item.quantity);
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart , removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
