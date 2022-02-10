import React from "react";
import Typical from "react-typical";
import Video from "../../media/intro-background-3.mp4";
import "./Banner.css";

function Banner() {
  const options = {
    target: document.querySelector(".typed-text"),
    speed: 40,
  };

  // type(options, 1000, 'Hello world!');

  return (
    <div className="intro">
      <div className="intro__title">
        <div className="intro__background">
          <video
            className="intro__backgroundVideo"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          ></video>
        </div>
        <h1>Hi, I'm Abhiram Satpute</h1>
        <Typical
          className="typed-text"
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
      </div>
    </div>
  );
}

export default Banner;
