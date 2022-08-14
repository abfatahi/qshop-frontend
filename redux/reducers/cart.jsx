import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    yourCart: [],
  },
  reducers: {
    handleAddToCart: (state, { payload }) => {
      state.yourCart.push(payload);
      return state;
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;

export const cartSelector = (state) => state.cart;
