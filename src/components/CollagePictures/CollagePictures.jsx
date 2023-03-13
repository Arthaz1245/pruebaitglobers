import React from "react";
import "./CollagePictures.scss";
import coupleclothes from "../../assets/imgs/imgscollage/coupleclothes.jpg";
import hombrecarrusel from "../../assets/imgs/hombrecarrusel.jpg";
import sportwoman from "../../assets/imgs/imgscollage/sportwoman.jpg";
import womanclothes from "../../assets/imgs/imgscollage/womanclothes.jpg";
import deportistasesion from "../../assets/imgs/deportistasesion.png";
import womanwinter from "../../assets/imgs/imgscollage/womanwinter.jpg";
import FormSubscribe from "../FormSubscribe/FormSubscribe";
const CollagePictures = () => {
  return (
    <div className="Pictures">
      <div className="titles">
        <h3>INSTAGRAM</h3>
        <h1>#ESCONFI</h1>
      </div>

      <div className="squarepictures">
        <div className="firstrow">
          <div className="div1">
            <img src={coupleclothes} alt="" />
          </div>
          <div className="div2">
            <img src={hombrecarrusel} alt="" />
          </div>
          <div className="div3">
            <img src={sportwoman} alt="" />
          </div>
        </div>
        <div className="secondrow">
          <div className="div4">
            <img src={womanclothes} alt="" />
          </div>
          <div className="div5">
            <img src={deportistasesion} alt="" />
          </div>
          <div className="div6">
            <img src={womanwinter} alt="" />
          </div>
        </div>
      </div>
      <div className="titles">
        <h3>NEWSLETTER</h3>
        <h1>SUSCRIBE</h1>
        <p>And find out more about us</p>
      </div>
      <div className="form">
        <FormSubscribe />
      </div>
    </div>
  );
};

export default CollagePictures;
