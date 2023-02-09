import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...product, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },
    deleteCart: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id == product.id);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...product, qty: x.qty - 1} : x
        );
      }
    },
  },
});

export const { addCart, deleteCart } = Cart.actions;
export default Cart.reducer;
