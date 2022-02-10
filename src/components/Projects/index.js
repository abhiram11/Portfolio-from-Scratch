import React from "react";
import "./Projects.css";
import Video from "../../media/projects3.mp4";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

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
        ></video>
      </div>
      <h3>
        &nbsp;&nbsp;You can also check out my{" "}
        <span style={{ color: "black" }}>Projects Portfolio</span> on my
        Youtube-esque Project!
      </h3>
      <div className="projects__button">
        <a
          className="projects__link"
          href="https://yt-clone-abhiram.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          Let's Go! <ArrowForwardIcon />
        </a>
      </div>
    </div>
  );
}

export default Projects;
