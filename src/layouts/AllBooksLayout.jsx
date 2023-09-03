import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import Filters from "../pages/shared/Filters/Filters";

const AllBooksLayout = () => {
  return (
    <div>
      <Row className="mx-0">
        <Col xs={12} md={3}>
          <Filters/>
        </Col>
        <Col xs={12} md={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default AllBooksLayout;
