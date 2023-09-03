import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Non-Shared/Homes/Home";
import AllBooks from "../pages/Non-Shared/AllBooks/AllBooks";
import Login from "../pages/Non-Shared/Login/Login";
import Register from "../pages/Non-Shared/Register/Register";
import AllBooksLayout from "../layouts/AllBooksLayout";
import BookDetails from "../pages/components/BookDetails/BookDetails";
import AddBook from "../pages/Non-Shared/AddBook/AddBook";
import Cart from "../pages/Non-Shared/Cart/Cart";
import Bookmarks from "../pages/Non-Shared/Bookmarks/Bookmarks";
import AuthLayout from "../layouts/AuthLayout";
import MyBooks from "../pages/Non-Shared/MyBooks/MyBooks";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllBooksLayout />,
        children: [
          {
            path: "/",
            element: <AllBooks />,
          },
          {
            path: "/books",
            element: <AllBooks />,
          },
          {
            path: "/books",
            element: <AllBooks />,
          },
          {
            path: "/books/:bookId",
            element: <BookDetails />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-book",
        element: (
          <AuthLayout>
            <AddBook />
          </AuthLayout>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <AuthLayout>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "/my-books",
        element: (
          <AuthLayout>
            <MyBooks />
          </AuthLayout>
        ),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
