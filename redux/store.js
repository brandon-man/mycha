import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.slice";
import { productsReducer } from "./reducers/products.slice";
import { productReducer } from "./reducers/singleProduct.slice";
import { productsApi } from "./api/products.api";

const reducer = {
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  [productsApi.reducerPath]: productsApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
