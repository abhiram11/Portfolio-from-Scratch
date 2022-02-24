import React from "react";
import "./Projects.css";
import Video from "../../media/projects3.mp4";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="project__content" id="projects">
        <div className="project__content__top">
          <h2>My Projects</h2>
          <p>
            Ranging from fully-fledged Web and Mobile Apps to Demo or
            Fragmentary Applications, I have deployed a wide range of projects
            implementing numerous technologies and libraries to showcase my
            skills. Have a look!
          </p>
        </div>
        <div className="project__content__bottom">
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=PdPoZLLXtUY"
              rel="noopener noreferrer"
            >
              Tinder Clone 📺
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://netflix-clone-77572.web.app/"
              rel="noopener noreferrer"
            >
              Netflix Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://spotify-clone-e93b9.web.app/"
              rel="noopener noreferrer"
            >
              Spotify Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://slack-clone-00001.firebaseapp.com/"
              rel="noopener noreferrer"
            >
              Slack Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://myntra-clone-001abhi.netlify.app/"
              rel="noopener noreferrer"
            >
              Myntra Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=BGfSsugl-_8"
              rel="noopener noreferrer"
            >
              Hand-Sign Recognition 📺
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=RMwmN4j0s5s"
              rel="noopener noreferrer"
            >
              Zomato App UI Clone 📺
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://tesla-clone-001.netlify.app/"
              rel="noopener noreferrer"
            >
              Tesla Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://banking-clone-001abhi.netlify.app/"
              rel="noopener noreferrer"
            >
              Banking Site
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://yt-clone-abhiram.web.app/"
              rel="noopener noreferrer"
            >
              Youtube Clone
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=D-rokQn3WRw"
              rel="noopener noreferrer"
            >
              Github Info Catcher 📺
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://github.com/abhiram11"
              rel="noopener noreferrer"
            >
              AND Many More!
            </a>
          </p>
        </div>
      </div>
      <div className="projects">
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
          <span
            style={{
              color: "black",
              "padding-left": "15px",
              "padding-right": "20px",
            }}
          >
            Projects
          </span>{" "}
          on my GitHub Profile!
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
    </>
  );
}

export default Projects;
