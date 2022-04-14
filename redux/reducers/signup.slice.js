import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ username, password, email }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        username,
        password,
        email,
      });
      const data = await response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, username: username, email: email };
      } else {
        return rejectWithValue(data);
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer comes here
  },

  extraReducers: {
    // Extra reducer comes here
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const userReducer = userSlice.reducer;
