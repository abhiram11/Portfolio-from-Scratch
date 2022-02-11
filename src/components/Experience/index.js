import React from "react";
import "./Experience.css";
import qdic from "../../media/about.jpg";
import iimcip from "../../media/IIMCIP.jpg";
import titan from "../../media/Titan.jpg";

function Experience() {
  return (
    <div>
      <h2>Work Experience</h2>
      <div className="experience__wrapper">
        <div className="experience__wrapper__a">
          <div className="experience__wrapper__content">
            <h4>Data Scientist, hBits Online Platform Services</h4>
            <p>Word word word</p>
          </div>
        </div>

        <div className="experience__wrapper__b">
          <div className="experience__wrapper__content">
            <h4>Data Scientist, mBreath Technologies</h4>
            <p>Word word word</p>
          </div>
        </div>
      </div>
      <h2>Competitions and Entrepreneurship Experiences</h2>
      <div className="experience__wrapper">
        <div className="experience__wrapper__a">
          {/* just change their flex start etc stuff.... */}
          <div className="experience__wrapper__content">
            <h4>Titan Technology Tune-in 2.0, Tamil Nadu</h4>
            <p></p>
            <p>
              This forum enabled us to showcase our product and technology to
              TITAN senior management (Director, Managing Director, CEO, and
              other executives). The forum helped us to discuss and demonstrate
              our project and research work and talk about the product's
              application, growth, and use cases that are to be considered while
              entering the market. The event was full of advanced researchers
              and projects led mainly by PhD scholars and professors
              representing elite institutes across India (IIT Kharagpur, Kanpur,
              Guwahati, IIIT Jabalpur, etc.).
            </p>
          </div>
          <div className="experience__wrapper__image">
            <img src={titan} alt="TTI-2.0" />
          </div>
        </div>
        <div className="experience__wrapper__b">
          <div className="experience__wrapper__content">
            <h4>Health Trail Programme, IIM Calcutta</h4>
            <p>
              Health trail was a three month non-residential accelerator
              programme for healthcare startups hosted by IIM Calcutta and
              Villgro. Got to learn about brand development, market research,
              GTM strategies, balance sheet handling, agreements, and all round
              business knowledge required to grow a startup while networking
              with entrepreneurs all around the country.
            </p>
          </div>
          <div className="experience__wrapper__image">
            <img src={iimcip} alt="IIM Calcutta Innovation Park" />
          </div>
        </div>
        <div className="experience__wrapper__a">
          {/* just change their flex start etc stuff.... */}
          <div className="experience__wrapper__content">
            <h4>Qualcomm Design in India Challenge</h4>
            <p></p>
            <p>
              This was one of the toughest startup programme to get selected.
              Our startup, mBreath, got ranked in Top 15 Nationwide Startups in
              India and we represented the company at The Ritz Carlton,
              Bangalore. After the selection in the final round, I learned a bit
              of Android Kernel programming, sensors interfacing with Qualcomm's
              Snapdragon processors, Java Native Interface (C and Java coding
              together), while researching and developing the AI models
              simultaneously.
            </p>
          </div>
          <div className="experience__wrapper__image">
            <img src={qdic} alt="QDIC" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
