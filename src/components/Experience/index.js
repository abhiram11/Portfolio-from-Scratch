import React, { useEffect } from "react";
import "./Experience.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogsCarousel from "../BlogsCarousel";

//add media queries to remove photos or change sizes etc

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        y: 50,
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView, animation]);

  return (
    <motion.div
      className="experience"
      id="experience"
      ref={ref}
      animate={animation}
    >
      <h2>Work Experience</h2>
      <div className="experience__wrapper__upper">
        <div className="experience__wrapper__upper__a">
          <h4>Data Scientist, hBits Online Platform Services</h4>
          <p className="experience__wrapper__duration">Sept 2019 - Jan 2020</p>
          <p>
            • Mapped the Real Estate data of a whole state of India using
            scraping, AWS, OCR, SpaCy, NLTK, and coreNLP.
          </p>
        </div>
        <div className="border" />
        <div className="experience__wrapper__upper__a">
          <h4>Data Scientist, mBreath Technologies</h4>
          <p className="experience__wrapper__duration">Sept 2018 - July 2019</p>
          <p>
            • Developed real-time audio analysis and classification, sleep apnea
            detection, and sleep stage classification.
            <br />
            <br />• Worked on assisting the CxOs at multiple fronts as an
            intrapreneur.
          </p>
        </div>
      </div>
      <h2
        style={{
          borderTop: "1px solid #e6e6e6",
          paddingTop: "2rem",
        }}
      >
        Competitions and Entrepreneurship Experiences
      </h2>
      <BlogsCarousel />
    </motion.div>
  );
}

export default Experience;
