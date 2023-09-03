import "./PopularCategories.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiLovers, GiMaterialsScience, GiCrimeSceneTape } from "react-icons/gi";
import { CiRainbow } from "react-icons/ci";
import { FaBity, FaAffiliatetheme } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterByGenra } from "../../../redux/features/BookSlice";

const PopularCategories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="mt-4">Popular Category</h3>
      <Row xs={2} md={6} className="g-4 fs-4 mb-5 mt-3 mx-4">
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("Thriller"))}>
            <FaBity className="fs-1 m-4 " color="#00473e" />
            <h5>Thriller</h5>
          </div>
        </Col>
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("Science Fiction"))}>
            <GiMaterialsScience className="fs-1 m-4 " color="#00473e" />
            <h5>Science</h5>
          </div>
        </Col>
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("Religious"))}>
            <FaAffiliatetheme className="fs-1 m-4 " color="#00473e" />
            <h5>Religious</h5>
          </div>
        </Col>
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("Horor"))}>
            <CiRainbow className="fs-1 m-4 " color="#00473e" />
            <h5>Horor</h5>
          </div>
        </Col>
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("Romantic"))}>
            <GiLovers className="fs-1 m-4 " color="#00473e" />
            <h5>Romantic</h5>
          </div>
        </Col>
        <Col>
          <div className="category" onClick={() => dispatch(filterByGenra("others"))}>
            <GiCrimeSceneTape className="fs-1 m-4 " color="#00473e" />
            <h5>Others</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PopularCategories;
