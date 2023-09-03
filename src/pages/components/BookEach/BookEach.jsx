import "./BookEach.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAddToCartMutation, useGetCartDataQuery } from "../../../redux/api";
import { addToBookmark } from "../../../redux/features/BookmarkSlice";
import Swal from "sweetalert2";

const bookCoverPages = [
  "/images/book1.webp",
  "/images/book2.webp",
  "/images/book3.webp",
  "/images/book4.webp",
  "/images/book5.webp",
  "/images/book6.webp",
];


const BookEach = ({ book, index }) => {
  const { author, title, genre, createdAt, id } = book;
  console.log(id);
  const dispatch = useDispatch();
  const { isLogin, user } = useSelector((state) => state.user);
  const [addToCartBook] = useAddToCartMutation();
  const { data } = useGetCartDataQuery();
  const {booksInCarts}=useSelector(state=>state.bookmark)
  console.log(booksInCarts);
  const navigate = useNavigate();
  const cartHandler = () => {
    if (!isLogin) {
      return navigate("/login");
    }
    const existingData = data.find((item) => item.book.id === id);
    if (!existingData) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Book added to cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addToCartBook({ book, user }));
    }
  };
  const bookmarkHandler = () => {
    const existingData = booksInCarts.find((item) => item.id === id);
    if (!existingData) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Book added to cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addToBookmark(book));
    }
  };
  return (
    <Col>
      <Card className="card">
        <Link to={`/books/${id}`} className="text-decoration-none">
          <Card.Img
            variant="top"
            src={bookCoverPages[index % bookCoverPages?.length]}
            className="cardImg"
          />
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
              <p>Author: {author}</p>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  <BiBook /> {genre}
                </p>
                <p>
                  <CiCalendarDate /> {createdAt}
                </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
        <div className="d-flex align-items-center justify-content-between">
          <button className="border-0 rounded fs-5 py-2" onClick={cartHandler}>
            Add to Cart
          </button>
          <button className="border-0 rounded fs-5 py-2" onClick={bookmarkHandler}>
            Read Later
          </button>
        </div>
      </Card>
    </Col>
  );
};

export default BookEach;
