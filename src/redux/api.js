import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://book-store-a8-omega.vercel.app/api/v1/" }),
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;
    console.log(token);
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
  tagTypes: ["Post", "User", "cart"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: `auth/signup`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `auth/signin`,
        method: "POST",
        body,
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `profile`,
      }),
    }),
    getBooks: builder.query({
      query: () => `books`,
      providesTags: ["Post"],
    }),
    getSelectedBook: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["Post"],
    }),




    // getBooks: builder.query({
    //   query: ({ page, limit, filter }) =>
    //     `books?_sort=id&_order=desc&_page=${page}&_limit=${limit}&${
    //       filter ? "genra=" + filter : ""
    //     }`,
    //   providesTags: ["Post"],
    // }),

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
    // createUser: builder.mutation({
    //   query: ({ ...body }) => ({
    //     url: `authors`,
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,

  useGetUserQuery,
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
