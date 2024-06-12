import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import productReducer from "./slices/productReducer";
import fullProductReducer from "./slices/fullProductReducer";
import filterReducer from "./slices/filterReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    fullProduct: fullProductReducer,
    filter: filterReducer,
  },
});
