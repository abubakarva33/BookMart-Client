import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksInCarts: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookmark: (state, { payload }) => {
      const existingData = state.booksInCarts.filter((item) => item.id === payload.id).length > 0;
      if (!existingData) {
        state.booksInCarts.push(payload);
      }
    },
    removeFromBookmark: (state, { payload }) => {
      state.booksInCarts = state.booksInCarts.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;
const bookmarkReducer = bookmarkSlice.reducer;
export default bookmarkReducer;
