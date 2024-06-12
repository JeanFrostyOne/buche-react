import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalSumOfProducts } from "../../utils/constants";

const initialState = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let product = action.payload;
      let currentProduct = state.items.find((item) => product.id === item.id);
      if (currentProduct) {
        state.items = state.items.map((item) => {
          if (item.id === product.id) {
            item.count++;
          }
          return item;
        });
      } else {
        state.items.push({ ...product, count: 1 });
      }
      calculateTotalSumOfProducts(state);
    },
    removeElement: (state, action) => {
      let product = action.payload;
      if (window.confirm("Вы точно хотите удалить?")) {
        state.items = state.items.filter((item) => item.id !== product.id);
        calculateTotalSumOfProducts(state);
      }
    },
    reduceAmount: (state, action) => {
      let product = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === product.id) {
          item.count--;
        }
        return item;
      });
      calculateTotalSumOfProducts(state);
    },

  },
});

export const selectCurrentProduct = (product) => (state) => {
  return state.cart.items.find((item) => product.id === item.id);
}
export const { addProduct, removeElement, reduceAmount } = cartSlice.actions;
export default cartSlice.reducer;
