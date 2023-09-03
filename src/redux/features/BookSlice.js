import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filteredBooks: [],
  filter: "",
  limit: 6,
  page: 1,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchByBook: (state, { payload }) => {
      if (payload) {
        state.filteredBooks = state.books.filter(
          (item) =>
            item.authorName.toLowerCase().includes(payload) ||
            item.genra.toLowerCase().includes(payload) ||
            item.title.toLowerCase().includes(payload)
        );
      } else {
        state.filteredBooks = state.books;
      }
    },
    filterByGenra: (state, { payload }) => {
      state.filter = payload;
      state.page = 1;
    },
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setBooks: (state, { payload }) => {
      state.books = payload;
      state.filteredBooks = payload;
    },
  },
});

export const { searchByBook, setBooks, filterByGenra, setPage, setLimit } = bookSlice.actions;
const userReducer = bookSlice.reducer;
export default userReducer;
