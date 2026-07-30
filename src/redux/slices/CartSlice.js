import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (itm) => itm.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.stock += 1;
      } else {
        state.items.push({ ...action.payload, stock: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((itm) => itm.id !== action.payload);
    },

    incQuantity: (state, action) => {
      const existingItem = state.items.find((itm) => itm.id === action.payload);
      if (existingItem) {
        existingItem.stock = existingItem.stock + 1;
      }
    },

    decQuantity: (state, action) => {
      const existingItem = state.items.find((itm) => itm.id === action.payload);
      if (!existingItem) {
        return;
      }

      if (existingItem.stock > 1) {
        existingItem.stock -= 1;
      } else {
        console.log("direct else run");
        state.items = state.items.filter((itm) => itm.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, decQuantity, incQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
