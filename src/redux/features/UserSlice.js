import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLogin: false,
  isSearchedByBook: false,
  searchProperty:"",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.user = action.payload;
      state.isLogin = Object.keys(action.payload).length !== 0;
    },
  },
});

export const { login, logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
