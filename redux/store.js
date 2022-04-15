import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.slice";
import { productsReducer } from "./reducers/products.slice";
import { productReducer } from "./reducers/singleProduct.slice";
import { authReducer } from "./reducers/auth.slice";

const reducer = {
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
