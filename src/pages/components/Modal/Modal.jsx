import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { Link } from "react-router-dom";

const ModalSuccess = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registration Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>WELCOME TO BOOK MART</h3>
          <p>Sign in to continue access</p>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-items-center">
          <Link to="/login">
            <Button variant="primary" onClick={handleClose}>
              Login Now
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSuccess;
