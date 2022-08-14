import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    yourCart: [],
  },
  reducers: {
    // togglecart: (state) => {
    //   state.yourCart = !state.yourCart;
    //   return state;
    // },
  },
});

// export const { togglecart } = cartSlice.actions;

export const cartSelector = (state) => state.cart;
