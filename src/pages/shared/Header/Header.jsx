import { NavLink } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/UserSlice";
import { Button, Form, Input } from "antd";
import {
  filterByGenra,
  searchByBook,
  setBooks,
  setLimit,
  setPage,
} from "../../../redux/features/BookSlice";
import { useGetBooksQuery } from "../../../redux/api";
import { useEffect } from "react";

const Header = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { page, limit, filter } = useSelector((state) => state.book);

  const dispatch = useDispatch();
  console.log({ page, limit, filter });

  const { data } = useGetBooksQuery({ page, limit, filter });

  useEffect(() => {
    dispatch(setBooks(data));
  }, [data]);

  const logoutHandler = () => {
    dispatch(logout({}));
    localStorage.clear();
  };
  const onFinish = ({ searchBox }) => {
    dispatch(searchByBook(searchBox));
  };

  const clearFilter = () => {
    dispatch(filterByGenra(""));
    dispatch(setPage(1));
    dispatch(setLimit(6));
  };
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <NavLink to="/">
          <img src="/images/logo.webp" alt="" className="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" className="headerSide" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" navbarScroll>
            <NavLink to="/books" className="navLink mx-2" onClick={clearFilter}>
              All-Books
            </NavLink>

            {isLogin ? (
              <>
                <NavLink to="/my-books" className="navLink mx-2">
                  My Books
                </NavLink>
                <NavLink to="/add-book" className="navLink mx-2">
                  Add Books
                </NavLink>
                <NavLink to="/my-cart" className="navLink mx-2">
                  My Cart
                </NavLink>
                <NavLink to="/bookmarks" className="navLink mx-2">
                  Bookmarks
                </NavLink>
                <button className="navLink mx-2 border-0" onClick={logoutHandler}>
                  Log out
                </button>
              </>
            ) : (
              <div>
                <NavLink to="/bookmarks" className="navLink mx-2">
                  Bookmarks
                </NavLink>
                <NavLink to="/login" className="navLink ms-2">
                  Login
                </NavLink>
                <NavLink to="/register" className="navLink mx-4">
                  Register
                </NavLink>
              </div>
            )}
          </Nav>
          <Form className="d-flex" onFinish={onFinish}>
            <Form.Item name="searchBox" className="me-2">
              <Input htmlType="search" />
            </Form.Item>

            <Form.Item>
              <Button variant="outline-success text-white" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
