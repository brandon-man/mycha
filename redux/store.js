import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.slice";
import { productsReducer } from "./reducers/products.slice";
import { productReducer } from "./reducers/singleProduct.slice";
import { productsApi } from "./api/products.api";
import { authReducer } from "./reducers/login.slice";
import { userReducer } from "./reducers/signup.slice";

const reducer = {
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  auth: authReducer,
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
