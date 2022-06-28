import React, { useEffect } from "react";
import Video from "../../media/Myname-3.m4v";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Intro from "../Intro";
import { motion, useAnimation } from "framer-motion";
import "./TextualContent.css";
import { useInView } from "react-intersection-observer";

function TextualContent() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
    <>
      <motion.div
        ref={ref}
        className="textual__content"
        id="about"
        animate={animation}
        // variants={fadeUp}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 1 }}
        // whileInView="visible"
        // viewport={{ once: true }}
      >
        <div className="textual__content__top">
          <div className="textual__content__top__left">
            <h2>Who Am I?</h2>
            <br />
            <p>
              I'm Abhiram, a budding Full-Stack Developer and also an
              experienced Data Scientist in Real Estate and Healthcare
              Industries! <br />
              <br />I have worked with elite individuals with grads from
              Harvard, Stanford, Duke, IIT Madras Bombay and Kharagpur, IIM
              Ahmedabad and Indore, NITs, and with a few entrepreneurs in my
              journey.
              <br />
              <br />I have a degree in CS (IT, First-Division with Distinction),
              and have also been to IIT Kharagpur and IIM Calcutta, not as a
              student, but as an entrepreneur.
            </p>
            <p className="video__text">
              Made using code!
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTg4LjkyIDI2OS42MWMtNy41OTc3LTM4LjQ3My00Ny44ODctNjQuMDQzLTc3Ljc2Mi04NC43MTktNS4yNDIyLTMuNjI4OS0xMC4yNzcgMC4yNDIxOS0xMS40MSA1LjExMzMtMy41NjY0IDAuNDM3NS02LjcxMDkgMi45NzI3LTYuNDgwNSA3LjY0NDUgMS43NTM5IDM0LjQ4LTEuODMyIDY4Ljg2Ny0xLjk0NTMgMTAzLjM0LTAuMDIzNDM3IDYuNzY1NiA4Ljg1NTUgMTAuODY3IDEzLjY0OCA1LjY1NjIgOS40MTAyLTEwLjIzNCAxMS4zNTUtMjUuNTUxIDIxLjEzMy0zNS4zMjQgMi4xMjExLTIuMTE3MiA0LjM3ODktMy42MDU1IDYuNzI2Ni00LjYwOTQgNS40ODA1IDEzLjI3NyA5Ljk2ODggMjYuOTg0IDEzLjc4MSA0MC43ODkgOC4yOTY5IDMwLjA0NyAxMi44NjcgNjEuMjM0IDEyLjExNyA5Mi40MzQtMC42NzU3OCAyOC40MS02LjY2MDIgNTcuNDMtMjIuODIgODEuMjM4LTE2LjIxMSAyMy44NjctNDQuODgzIDQwLjQ5Ni03My43MjcgMzEuMzU1LTI4LjY2NC05LjA3ODEtNTAuNTI3LTM1Ljk4NC03MC42Ni01Ni44NDQtMjMuNzU0LTI0LjYwNS01MC4yNS00NS41NjYtODIuMDEyLTU4LjkyMi0zNC4zMTYtMTQuNDI2LTcyLjA0Ny0xMi45MjYtMTAwLjg0IDEyLjE2OC0yOC44ODcgMjUuMTY0LTQ1LjY2IDY0LjIxMS00NS43NzcgMTAyLjIzLTAuMDUwNzgxIDE4LjQxOCA0LjQ4NDQgMzYuMzUyIDExLjcwNyA1My4xODQgNC4wNTQ3IDkuNDU3IDE3LjgzMiAxLjI5NjkgMTMuODA5LTguMDc0Mi0xNS41NzQtMzYuMzAxLTExLjA3OC03Ni43NTQgOS42NzU4LTEwOS45NiAxMC4yNS0xNi4zOTUgMjQuNzE1LTMyLjA2MiA0My4xMDktMzkuMDQ3IDE2LjcyMy02LjM1MTYgMzQuODEyLTQuNTQ2OSA1MS42MDUgMC40Mzc1IDMzLjAyNyA5LjgwNDcgNjEuMTcyIDMyLjM2MyA4NC44NDggNTYuNjQxIDIxLjMwMSAyMS44NCA0Mi4zNDggNDYuNTM1IDcwLjUwOCA1OS43MTEgMjkuNjg0IDEzLjg4NyA1OS45ODQgNS44NTk0IDg0LjE0MS0xNC45NDUgMjEuNDA2LTE4LjQ0MSAzMy4yMjctNDUuODAxIDM4LjU4Mi03Mi45OTYgMTEtNTUuODAxLTAuMTQwNjItMTE3LjA3LTIxLjA5LTE2OS44IDkuNjUyMyAyLjYwMTYgMTkuNDMgOC42NjggMjcuMzgzIDEyLjMzNiA2LjUgMi45OTYxIDEzLjE3Ni0xLjgzOTggMTEuNzUtOS4wMzkxem0tNDYuMzc5LTIwLjMyOGMtMy44NTE2LTguMzkwNi04LjA5MzgtMTYuNTktMTIuOTE0LTI0LjQ3Ny01LjM3NS04Ljc4MTItMTkuMjE5LTAuNzUtMTMuODEyIDguMDc0MiAzLjgxNjQgNi4yNDIyIDcuMjkzIDEyLjY3MiAxMC40ODggMTkuMjQyLTAuNTY2NDEgMC4yMzgyOC0xLjEzMjggMC40NzY1Ni0xLjY5OTIgMC43NS03LjAxOTUgMy4zMzU5LTEyLjM3OSA5LjMyNDItMTYuNDMgMTUuODI4IDAuOTA2MjUtMjEuODQgMi4wOTM4LTQzLjY2OCAxLjMyNDItNjUuNTMxIDEyIDguNDAyMyAyMy43OTMgMTcuMDU5IDM0LjY5MSAyNi44OTUgOC4zMzU5IDcuNTE5NSAxNi41MDggMTYuMDMxIDIyLjI2MiAyNS44MDUtNy44MTI1LTMuNDYwOS0xNS43ODEtNi4yMTg4LTIzLjkxLTYuNTg1OXoiLz4KPC9zdmc+Cg=="
                alt="arrow"
                className="video__arrow"
              />
            </p>

            {/* <p>
            I have worked as a Data Scientist at two startups each comprising of
            elite individuals, hBits (team of around 12, with grads from
            Harvard, Stanford, Duke, IIT Madras and Bombay, IIM Ahmedabad and
            Indore, NIT Nagpur, and other entrepreneurs), and mBreath
            Technologies (team of 4 with myself being the first full-time hire,
            two IIT Kharagpur PhD Scholars and an IIT Kharagpur Professor, along
            with interns from IIT Kharagpur, NIT Raipur, and VIT).
          </p> */}

            {/* <p>
        With my experience in data science, fast and dynamic start-up culture,
        team management and mentorship, assistance in business development,
        customer profiling, communication and networking, I believe I have the
        knowledge, drive, and technical skills needed to be the perfect addition
        to any technical team.
      </p> */}
          </div>
          <LazyLoadComponent className="textual__content__top__right">
            {/* <LazyLoadImage
            src={Photo}
            alt="Graphic Signature"
            effect="blur"
            style={{
              width: "320px",
              "object-fit": "contain",
            }}
            placeholderSrc={LazyPhoto}
          /> */}
            <video
              className="textual__content__video"
              autoPlay
              loop
              muted
              src={Video}
              type="video/mp4"
            />
          </LazyLoadComponent>
        </div>
      </motion.div>
      <Intro />
    </>
  );
}

export default TextualContent;
