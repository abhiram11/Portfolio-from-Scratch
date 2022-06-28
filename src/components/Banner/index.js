import React from "react";
import Typical from "react-typical";
// import ProfilePhoto from "../../media/about-cropped.avif";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Video from "../../media/magic-1080.mp4";
import "./Banner2.css";
import { motion } from "framer-motion";
import DownArrow from "./DownArrow";

function Banner() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const options = {
    target: document.querySelector(".typed-text"),
    speed: 40,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="intro"
      id="banner"
      // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <LazyLoadComponent>
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
      </LazyLoadComponent>
      <motion.div
        className="intro__title"
        // style={{ transform: `translateY(${offsetY * 0.14}px)` }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
      >
        {/* <motion.img
          src={ProfilePhoto}
          className="intro__profilePhoto"
          alt="Profile"
          whileHover={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        /> */}
        <motion.h1>Abhiram Satpute</motion.h1>
        {/* <motion.h1>Hi! I'm Abhiram Satpute</motion.h1> */}
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
