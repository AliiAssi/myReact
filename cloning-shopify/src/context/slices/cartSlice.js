import { createSlice } from "@reduxjs/toolkit";
import { saveCartState } from "../../utils/localstorage";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, title, quantity, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, title, quantity, price });
      }

      saveCartState(state); // Save to local storage whenever state changes
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      saveCartState(state); // Save to local storage whenever state changes
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      saveCartState(state); // Save to local storage whenever state changes
    },
    clearCart: (state) => {
      state.items = [];

      saveCartState(state); // Save to local storage whenever state changes
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
