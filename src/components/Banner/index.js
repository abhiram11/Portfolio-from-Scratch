import React from "react";
import Typical from "react-typical";
// import Video from "../../media/intro-background-3.mp4";
import ProfilePhoto from "../../media/about-cropped.avif";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Video from "../../media/Intro-Background-3-1.m4v";
import "./Banner.css";

function Banner() {
  const options = {
    target: document.querySelector(".typed-text"),
    speed: 40,
  };

  return (
    <div className="intro" id="banner">
      <div className="intro__title">
        <LazyLoadComponent>
          <div className="intro__background">
            {/* <Suspense
            fallback={
              <img
                src={Photo}
                alt="Banner Lazy"
                style={{
                  "object-fit": "contain",
                  width: "100%",
                }}
              />
            }
          > */}
            <video
              className="intro__backgroundVideo"
              autoPlay
              loop
              muted
              src={Video}
              type="video/mp4"
            />
            {/* </Suspense> */}
          </div>
        </LazyLoadComponent>
        <img src={ProfilePhoto} className="intro__profilePhoto" alt="Profile" />
        <h1>Hi! I'm Abhiram Satpute</h1>
        <Typical
          className="typed-text-bigscreen"
          loop={Infinity}
          wrapper="h4"
          steps={[
            "Experienced Data Scientist 🚀",
            500,
            options,
            "Budding Full Stack Developer 💻",
            500,
            "Thanks for staying > 10 seconds here 😁",
            500,
          ]}
        />
        <Typical
          className="typed-text-smallscreen"
          loop={Infinity}
          wrapper="h6"
          steps={[
            "Experienced Data Scientist 🚀",
            500,
            options,
            "Budding Full Stack Developer 💻",
            500,
            "Thanks for staying > 10 seconds here 😁",
            500,
          ]}
        />
      </div>
    </div>
  );
}

export default Banner;
