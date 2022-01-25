import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.slice";
import { productReducer } from "./reducers/products.slice";

const reducer = {
  cart: cartReducer,
  products: productReducer
};

const store = configureStore({
  reducer
});

export default store;
