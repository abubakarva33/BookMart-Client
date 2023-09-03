import "./BookList.css";
import Row from "react-bootstrap/Row";
import BookEach from "../BookEach/BookEach";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterByGenra, setLimit, setPage } from "../../../redux/features/BookSlice";
import { Pagination } from "antd";

const BookList = () => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const { filteredBooks, filter, page} = useSelector((state) => state.book);

  console.log(!!filter);

  useEffect(() => {
    fetch(`http://localhost:3000/books?${filter ? "genra=" + filter : ""}`)
      .then((res) => res.json())
      .then((data) => setTotal(data.length));
  }, [filter]);

  useEffect(() => {
    dispatch(filterByGenra());
  }, []);

  const onShowSizeChange = (page, limit) => {
    console.log({ page, limit });
    dispatch(setPage(page));
    dispatch(setLimit(limit));
  };
  return (
    <div>
      <>
        <h3>Popular Books</h3>
        <Row xs={1} sm={2} md={2} lg={3} className="g-4 mt-1 mb-5">
          {filteredBooks?.length != 0 ? (
            filteredBooks?.map((book, idx) => <BookEach key={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}
        </Row>
        <Pagination
          showSizeChanger
          onChange={onShowSizeChange}
          defaultCurrent={page}
          current={page}
          defaultPageSize={6}
          total={total}
        />
      </>
    </div>
  );
};

export default BookList;
