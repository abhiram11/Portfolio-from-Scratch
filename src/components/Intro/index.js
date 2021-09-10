import React, { useState } from "react";
import Typical from "react-typical";
// import styles from "./styles.module.css";

import "./Intro.css";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { data } from "./data";

function Intro() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <div className="intro">
        <div className="intro__title">
          <h1>Hi, I'm Abhiram Satpute</h1>
          <Typical
            loop={Infinity}
            wrapper="h4"
            steps={[
              "Experienced Data Scientist 🚀",
              500,
              "Budding Full Stack Developer 💻",
              500,
              "Thanks for staying > 10 seconds here 😊",
              500,
            ]}
          />
        </div>
      </div>
      <div className="wrapper">
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className="container"
          onClick={() => set((open) => !open)}
        >
          {open ? null : <h1>TL;DR My Skills</h1>}
          {transition((style, item) => (
            <animated.div
              className="item"
              style={{ ...style, background: item.css }}
            >
              <h3>{item?.title}</h3>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
}

export default Intro;
