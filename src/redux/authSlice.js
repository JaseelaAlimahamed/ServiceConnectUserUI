import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token:null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;

    }
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
