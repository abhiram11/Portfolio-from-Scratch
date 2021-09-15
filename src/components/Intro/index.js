import React, { useState } from "react";
import { data } from "./data";
import "./Intro.css";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Banner from "../Banner";

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
      <Banner />
      <div className="wrapper">
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className="container"
          onClick={() => set((open) => !open)}
        >
          {open ? null : <h2>TL;DR My Skills</h2>}
          {transition((style, item) => (
            <animated.div
              className="item"
              style={{ ...style, background: item.css }}
            >
              <h4>{item?.title}</h4>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
}

export default Intro;
