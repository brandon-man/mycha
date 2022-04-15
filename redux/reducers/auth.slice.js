import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ISSERVER = typeof window === "undefined";
let locSto;

if (!ISSERVER) {
  locSto = JSON.parse(localStorage.getItem("user"));
}

const user = locSto;

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// User signup
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const register = async (userData) => {
        const response = await axios.post(
          "http://localhost:5000/api/auth/users",
          userData
        );

        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      };
      return await register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  // non async
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  // only handle action types
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
  },
});

export const { reset } = authSlice.actions;
export const authReducer = authSlice.reducer;
