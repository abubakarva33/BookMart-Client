import "./Cart.css";
import { Row } from "react-bootstrap";
import CartBookList from "../../components/CartBookList/CartBookList";
import { useGetCartDataQuery } from "../../../redux/api";

const Cart = () => {
  const { data } = useGetCartDataQuery();
  return (
    <Row xs={1} xm={2} md={4} className="gy-4 gx-0 mt-1 mb-5">
      {data?.length !== 0 ? (
        data?.map((book, idx) => <CartBookList key={idx} book={book} />)
      ) : (
        <p> No book found with this criteria</p>
      )}
    </Row>
  );
};

export default Cart;
