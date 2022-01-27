import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.slice";
import { productReducer } from "./reducers/products.slice";
import { productsApi } from "./api/products.api";

const reducer = {
  cart: cartReducer,
  products: productReducer,
  [productsApi.reducerPath]: productsApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
});

export default store;
