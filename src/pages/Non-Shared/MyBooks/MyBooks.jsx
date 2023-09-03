import { useSelector } from "react-redux";
import "./MyBooks.css";
import { useGetBooksByAuthorQuery } from "../../../redux/api";
import { Row } from "react-bootstrap";
import MyBooksList from "../../components/MyBooksList/MyBooksList";

const MyBooks = () => {
    const {user,}=useSelector(state=>state.user)
    const { data,isLoading } = useGetBooksByAuthorQuery(user.id);
    if (isLoading) {
        return
    }
    console.log(data);

    return (
        <Row xs={1} xm={2} md={4} className="gy-4 gx-0 mt-1 mb-5">
        {data?.length !== 0 ? (
          data?.map((book, idx) => <MyBooksList key={idx} book={book} />)
        ) : (
          <p> No book found with this criteria</p>
        )}
      </Row>
    );
};

export default MyBooks;