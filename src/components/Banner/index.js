import React from "react";
import Typical from "react-typical";
import Video from "../../media/magic-1080.mp4";
import "./Banner2.css";
import { motion } from "framer-motion";
import DownArrow from "./DownArrow";

function Banner() {
  const options = {
    target: document.querySelector(".typed-text"),
    speed: 40,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="intro" id="banner">
      <div>
        <div className="intro__background">
          <video
            className="intro__backgroundVideo"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
      </div>
      <motion.div
        className="intro__title"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
      >
        <motion.h1>Abhiram Satpute</motion.h1>
        <Typical
          className="typed-text-bigscreen"
          loop={Infinity}
          wrapper="h4"
          steps={[
            "Budding Full Stack Developer 💻",
            500,
            "Experienced Data Scientist 🚀",
            500,
            options,
            "Thanks for staying > 10 seconds here 😁",
            500,
          ]}
        />
        <Typical
          className="typed-text-smallscreen"
          loop={Infinity}
          wrapper="h6"
          steps={[
            "Budding Full Stack Developer 💻",
            500,
            "Experienced Data Scientist 🚀",
            500,
            options,
            "Thanks for staying > 10 seconds here 😁",
            500,
          ]}
        />
      </motion.div>
      <DownArrow />
    </div>
  );
}

export default Banner;
