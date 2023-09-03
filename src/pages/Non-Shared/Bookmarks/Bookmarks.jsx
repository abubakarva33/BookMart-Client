import { useSelector } from "react-redux";
import "./Bookmarks.css";
import { Row } from "react-bootstrap";
import BookmarkList from "../../components/BookmarkList/BookmarkList";

const Bookmarks = () => {
    const {booksInCarts}= useSelector(state=>state.bookmark)
    return (
        <Row xs={1} xm={2} md={4} className="gy-4 gx-0 mt-1 mb-5">
        {booksInCarts?.length !== 0 ? (
          booksInCarts?.map((book, idx) => <BookmarkList key={idx} book={book} />)
        ) : (
          <p> No book found with this criteria</p>
        )}
      </Row>
    );
};

export default Bookmarks;