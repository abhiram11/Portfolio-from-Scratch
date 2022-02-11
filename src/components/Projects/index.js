import React from "react";
import "./Projects.css";
import Video from "../../media/projects3.mp4";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__background">
        <video
          className="projects__backgroundVideo"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
      <h3>
        You can also check out my{" "}
        <span style={{ color: "black" }}>Projects Portfolio</span> on my GitHub
        Profile!
      </h3>
      <div className="projects__button">
        <a
          className="projects__link"
          href="https://github.com/abhiram11/Certifications"
          target="_blank"
          rel="noreferrer"
        >
          <p>Let's Go</p>
          <ArrowForwardIcon />
          {/* <ArrowForwardIosIcon />
          <TrendingFlatIcon /> */}

          {/* REFER TO BANKING SITE HEROSECTION */}
        </a>
      </div>
    </div>
  );
}

export default Projects;
