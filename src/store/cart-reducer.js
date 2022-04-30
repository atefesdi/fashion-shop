import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      state.totalPrice = state.totalPrice + newItem.price;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.quantity++;
      } else {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          gender: newItem.gender,
          image: newItem.image,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      state.totalQuantity--;
      const removingItemId = action.payload;
      const existItemIndex = state.items.findIndex(
        (item) => item.id === removingItemId
      );
      const existItem = state.items[existItemIndex];
      if (existItem.quantity > 1) {
        existItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== existItem.id);
      }

      state.totalPrice = state.totalPrice - existItem.price;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
