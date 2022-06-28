import React, { useEffect } from "react";
import "./Experience.css";
// import qdic from "../../media/Titan4.avif";
// import Lazyqdic from "../../media/LazyTitan4.jpg";
// import iimcip from "../../media/IIMCIP.avif";
// import Lazyiimcip from "../../media/LazyIIMCIP.jpg";
// import titan from "../../media/Titan.avif";
// import Lazytitan from "../../media/LazyTitan.jpg";
// import prize from "../../media/img_bg_1.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import { LazyLoadImage } from "react-lazy-load-image-component";

import BlogsCarousel from "../BlogsCarousel";

//add media queries to remove photos or change sizes etc

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    // console.log(inView);
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
            <br />• Worked on assisting the CxOs at multiple fronts as
            intrapreneur.
          </p>
        </div>
      </div>
      <h2 style={{ borderTop: "1px solid #e6e6e6", paddingTop: "2rem" }}>
        Competitions and Entrepreneurship Experiences
      </h2>
      <BlogsCarousel />
    </motion.div>
  );
}

export default Experience;

/* <div className="embla">
<div className="embla__viewport" ref={viewportRef}>
  <div className="embla__container">
    {slides.map((index) => (
      <div className="embla__slide" key={index}>
        <div className="embla__slide__inner">
          <img
            className="embla__slide__img"
            src={mediaByIndex(index)}
            alt="A cool cat."
          />
        </div>
      </div>
    ))}
  </div>
</div>
<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> </div>*/

// <div className="experience__wrapper__a">
//           {/* just change their flex start etc stuff.... */}
//           <div className="experience__wrapper__lower">
//             <h4>Titan Technology Tune-in 2.0, Tamil Nadu</h4>
//             <p className="experience__wrapper__duration">
//               April 2019 - May 2019
//             </p>
//             <p>
//               Showed our product and technology to TITAN senior management
//               (Director, Managing Director, CEO, and other executives).
//             </p>
//           </div>
//           {/* <div> */}
//           <LazyLoadImage
//             src={titan}
//             alt="TTI-2.0"
//             effect="blur"
//             className="experience__wrapper__image"
//             // style={{
//             //   height: "340px",
//             //   "object-fit": "contain",
//             // }}
//             placeholderSrc={Lazytitan}
//           />
//           {/* </div> */}
//         </div>
//         <div className="experience__wrapper__b">
//           <div className="experience__wrapper__lower">
//             <h4>Health Trail Programme, IIM Calcutta</h4>
//             <p className="experience__wrapper__duration">
//               Jan 2019 - April 2019
//             </p>

//             <p>
//               Learned about brand development, market research, GTM strategies,
//               balance sheets, legal agreements, etc. in this incubation.
//             </p>
//           </div>
//           {/* <div> */}
//           <LazyLoadImage
//             src={iimcip}
//             alt="IIMCIP"
//             effect="blur"
//             className="experience__wrapper__image"
//             placeholderSrc={Lazyiimcip}
//           />
//           {/* </div> */}
//         </div>
//         <div className="experience__wrapper__a">
//           {/* just change their flex start etc stuff.... */}
//           <div className="experience__wrapper__lower">
//             <h4>Qualcomm Design in India Challenge, Bangalore</h4>
//             <p className="experience__wrapper__duration">
//               Sept 2018 - March 2019
//             </p>
//             <p>
//               We ranked in Top 15 Startups in India and represented the company
//               to Senior Management of Qualcomm and investors.
//             </p>
//           </div>
//           {/* <div> */}
//           <LazyLoadImage
//             src={qdic}
//             alt="QDIC"
//             effect="blur"
//             className="experience__wrapper__image"
//             placeholderSrc={Lazyqdic}
//           />
//           {/* </div> */}
//         </div>
