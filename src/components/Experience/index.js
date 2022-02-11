import React from "react";
import "./Experience.css";
import pic1 from "../../media/about.jpg";

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <div className="experience__wrapper">
        <div className="experience__wrapper__a">
          {/* just change their flex start etc stuff.... */}
          <div className="experience__wrapper__content">
            <h4>hBits, Nariman Point, Mumbai</h4>
            <p>Word word word</p>
          </div>
          <div className="experience__wrapper__image">
            <img src={pic1} alt="hBits" />
          </div>
        </div>

        <div className="experience__wrapper__b">
          <div className="experience__wrapper__content">
            <h4>mBreath Technologies, IIT Kharagpur (E-Cell)</h4>
            <p>Word word word</p>
          </div>
          <div className="experience__wrapper__image">
            <img src={pic1} alt="hBits" />
          </div>
        </div>
        {/* <div className="experience__wrapper__a">hi</div> */}
      </div>
    </div>
  );
}

export default Experience;
