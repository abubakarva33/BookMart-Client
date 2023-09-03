import { Card, Col } from "react-bootstrap";
import "./BookmarkList.css";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeFromBookmark } from "../../../redux/features/BookmarkSlice";
import Swal from "sweetalert2";

const BookmarkList = ({book}) => {
    const { authorName, picture, title, genra, registered } = book;
    const dispatch = useDispatch();
    const removeHandler = ()=>{
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
          dispatch(removeFromBookmark(book))
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
                    onClick={removeHandler }
                  >
                    Remove from Bookmark
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    );
  }

export default BookmarkList;