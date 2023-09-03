import BookList from "../../components/BookList/BookList";
import Slider from "../../components/Carosel/Slider";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import "./AllBooks.css";


const AllBooks = () => {
  return (
    <div className="mt-4">
      <Slider/>
      <PopularCategories/>
      <BookList/>
    </div>
  );
};

export default AllBooks;
