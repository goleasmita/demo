import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
