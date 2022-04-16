import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ISSERVER = typeof window === "undefined";
let nextStorage;

if (!ISSERVER) {
  nextStorage = JSON.parse(localStorage.getItem("user"));
}

const user = nextStorage;

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
        const response = await axios.post("/api/auth/users", userData);

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

// User login
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const login = async (userData) => {
        const response = await axios.post("/api/auth/login", userData);

        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      };
      return await login(user);
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

// User logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await localStorage.removeItem("user");
});

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
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    },
  },
});

export const { reset } = authSlice.actions;
export const authReducer = authSlice.reducer;
