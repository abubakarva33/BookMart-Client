import "./BookList.css";
import Row from "react-bootstrap/Row";
import BookEach from "../BookEach/BookEach";
import { useDispatch, } from "react-redux";
import {  setLimit, setPage } from "../../../redux/features/BookSlice";
import { Pagination } from "antd";
import { useGetBooksQuery } from "../../../redux/api";

const BookList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetBooksQuery();
  if (isLoading) {
    return <p> loading...</p>;
  }
  // const onShowSizeChange = (page, limit) => {
  //   dispatch(setPage(page));
  //   dispatch(setLimit(limit));
  // };
  return (
    <div>
      <>
        <h3>Popular Books</h3>
        <Row xs={1} sm={2} md={2} lg={3} className="g-4 mt-1 mb-5">
          {data?.data?.length != 0 ? (
            data?.data?.map((book, idx) => <BookEach key={idx} index={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}
        </Row>
        <Pagination
          showSizeChanger
          onChange={onShowSizeChange}
          defaultCurrent={data?.meta?.page}
          current={data?.meta?.page}
          defaultPageSize={6}
          total={data?.meta?.total}
        />
      </>
    </div>
  );
};

export default BookList;
