import React from "react";
import { Link } from "react-router-dom";
import "./Section.scss";
const section = ({ imgBackground, number, imgurl, title, description, id }) => {
  return (
    <section id={id}>
      {number % 2 !== 0 ? (
        <div className="firstSection">
          <div className="sectionImg">
            <img src={imgBackground} alt="" />
          </div>
          <div className="sectionText">
            <div className="imgpng">
              <img src={imgurl} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/shop">
              <p style={{ color: "black" }}>{`> MORE INFO`}</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="firstSection">
          <div className="sectionText">
            <div className="imgpng">
              <img src={imgurl} alt="" />
            </div>
            <h2>{title}</h2>
            <p style={{ color: "black" }}>{description}</p>
            <Link to="/shop">
              <p>{`> MORE INFO`}</p>
            </Link>
          </div>
          <div className="sectionImg">
            <img src={imgBackground} alt="" />
          </div>
        </div>
      )}
    </section>
  );
};

export default section;
