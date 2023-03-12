import React from "react";
import "./Section.scss";
const section = ({ imgBackground, number, imgurl, title, description }) => {
  return (
    <section>
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
          </div>
        </div>
      ) : (
        <div className="firstSection">
          <div className="sectionText">
            <div className="imgpng">
              <img src={imgurl} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
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
