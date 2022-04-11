import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
  status: null,
  error: null,
};

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${_id}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  // only handle action types
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
