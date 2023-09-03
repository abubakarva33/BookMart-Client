import "./Slider.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Slider = () => {
  return (
    <Carousel effect="fade" autoplay>
      <div>
        <img src="/images/slider1.webp" alt="" className="sliderImg"/>
      </div>
      <div>
      <img src="/images/slider2.webp" alt="" className="sliderImg"/>
      </div>
      <div>
      <img src="/images/slider3.webp" alt="" className="sliderImg"/>
      </div>
    </Carousel>
  );
};

export default Slider;
