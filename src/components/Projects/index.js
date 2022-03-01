import React from "react";
import "./Projects.css";
import Video from "../../media/Projects3-4.m4v";
// import LazyProject from "../../media/LazyProject3.JPG";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import "./Projects.css";

function Projects() {
  const youtubeIcon = (
    <YouTubeIcon
      sx={{
        fontSize: 32,
        color: "red",
        marginBottom: "-10px",
        marginTop: "-6px",
      }}
    />
  );

  return (
    <>
      <div className="project__content" id="projects">
        <div className="project__content__top">
          <h2>Projects</h2>
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
              Tinder Clone {youtubeIcon}
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
              Hand-Sign Recognition {youtubeIcon}
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=RMwmN4j0s5s"
              rel="noopener noreferrer"
            >
              Zomato App UI Clone {youtubeIcon}
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
              Github Info Catcher {youtubeIcon}
            </a>
          </p>
          <p className="project__content__bottom__each">
            <a
              target="_blank"
              href="https://github.com/abhiram11/Deployments-and-Certifications"
              rel="noopener noreferrer"
            >
              AND Many More!
            </a>
          </p>
        </div>
      </div>
      <div className="projects">
        <div className="projects__background">
          {/* <Suspense
            fallback={
              <img
                src={LazyProject}
                alt="Project Lazy"
                style={{
                  "object-fit": "contain",
                  width: "100%",
                }}
              />
            }
          > */}
          <LazyLoadComponent>
            <video
              className="projects__backgroundVideo"
              autoPlay
              loop
              muted
              src={Video}
              type="video/mp4"
            />
          </LazyLoadComponent>

          {/* </Suspense> */}
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
            //MAYBE ADD VIDEO DETAILS in CSS
            className="projects__link"
            href="https://github.com/abhiram11/Deployments-and-Certifications"
            target="_blank"
            rel="noreferrer"
          >
            <p>Let's Go</p>
            <ArrowForwardIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
