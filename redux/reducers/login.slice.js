import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  auth: {},
  status: null,
  error: null,
};

export const fetchtoken = createAsyncThunk(
  "auth/login",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/login`, {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        credentials
      );
      const { token } = response.data;
      window.localStorage.setItem("token", token);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      return state._id === action.auth._id ? action.auth : state;
    },
  },
  // only handle action types
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "pending";
    },
    [logIn.fulfilled]: (state, action) => {
      state.status = "success";
      state.auth = action.payload;
    },
    [logIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
