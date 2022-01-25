import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id = null, { rejectWithValue }) => {
        try {
          const response = await axios.get("http://localhost:5000/api/products");
          return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }  
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    // only handle action types
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

export const productReducer = productsSlice.reducer;

