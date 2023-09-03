import { Card, Col } from "react-bootstrap";
import "./MyBooksList.css";
import { useDispatch } from "react-redux";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useRemoveBookMutation } from "../../../redux/api";
import Swal from "sweetalert2";

const MyBooksList = ({book}) => {
    const { authorName, picture, title, genra, registered } = book;
    const [removeBook]=useRemoveBookMutation()
    const dispatch = useDispatch();
    const deleteBook=()=>{
        Swal.fire({
          title: 'Are you sure to delete?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            dispatch(removeBook(book.id))
          }
        })
      }
    return (
        <Col>
        <Card className="card mx-2" >
          <Card.Img variant="top" src={picture} className="cardImg" />
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
              <p>Author: {authorName}</p>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  <BiBook /> {genra}
                </p>
                <p>
                  <CiCalendarDate /> {registered}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="border-0 rounded fs-5 py-2"
                  onClick={deleteBook}
                >
                  Delete Book
                </button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
    </Col>
    );
};

export default MyBooksList;