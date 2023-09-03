import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Post", "User", "cart"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `authors`,
    }),
    getBooks: builder.query({
      query: ({ page, limit, filter }) =>
        `books?_sort=id&_order=desc&_page=${page}&_limit=${limit}&${
          filter ? "genra=" + filter : ""
        }`,
      providesTags: ["Post"],
    }),
    getSelectedBook: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["Post"],
    }),
    getBooksByAuthor: builder.query({
      query: (authorId) => `books/?user.id=${authorId}`,
      providesTags: ["Post"],
    }),
    removeBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    getComments: builder.query({
      query: (bookId) => `reviews?bookId=${bookId}&_sort=id&_order=desc`,
      providesTags: ["Post"],
    }),
    postAComment: builder.mutation({
      query: ({ ...body }) => ({
        url: `reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    postABook: builder.mutation({
      query: ({ ...body }) => ({
        url: `books`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: `cartData`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    getCartData: builder.query({
      query: () => `cartData`,
      providesTags: ["cart"],
    }),
    removeCartData: builder.mutation({
      query: (id) => ({
        url: `cartData/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    createUser: builder.mutation({
      query: ({ ...body }) => ({
        url: `authors`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useGetBooksQuery,
  useGetSelectedBookQuery,
  useGetCommentsQuery,
  usePostACommentMutation,
  usePostABookMutation,
  useGetCartDataQuery,
  useAddToCartMutation,
  useRemoveCartDataMutation,
  useGetBooksByAuthorQuery,
  useRemoveBookMutation,
} = api;
