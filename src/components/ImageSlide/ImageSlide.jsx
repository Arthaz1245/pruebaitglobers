import { useState, useEffect } from "react";
import { IoIosWoman, IoMdMan } from "react-icons/io";
import { GiMonclerJacket } from "react-icons/gi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ImageSlide.scss";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
</style>;
const ImageSlide = ({ slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);
  return (
    <div className="slideStyle">
      <div
        className="slide-image"
        style={{ backgroundImage: `url(${slides[index].url})` }}
      >
        <div className="logo">
          <span className="logos">Confy</span>
        </div>
        <div className="button-container">
          <div>
            <IoIosWoman className="icon-react" />
            <a href="#women-section">Women</a>
          </div>
          <div>
            <IoMdMan className="icon-react" />
            <a href="#men-section">Men</a>
          </div>
          <div>
            <GiMonclerJacket className="icon-react" />
            <a href="#winter-section">Winter</a>
          </div>
          <div>
            <MdOutlineSportsTennis className="icon-react" />
            <a href="#sport-section">Sports</a>
          </div>
        </div>
        <div className="Menu">
          <div className="divseparate">
            <span>Account</span>
          </div>
          <div>
            <span>My purchases</span>
          </div>
        </div>
        <Link to="/shop">
          <span href="#" className="shop-button">
            Shop Now
          </span>
        </Link>

        <div className="dots-slice">
          {slides.map((slide, i) => (
            <span
              key={i}
              className={i === index ? "dotClicked" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
