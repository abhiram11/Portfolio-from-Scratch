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

function Intro() {
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    // from: { size: "20%", background: "hotpink" },
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "#26212e" : "hotpink",
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
      <div className="wrapper">
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className="container"
          onClick={() => setOpen((open) => !open)}
        >
          {open ? null : (
            <div className="skills__cover">
              <h3 className="skills__cover__h3">
                What
                <br />
                makes me
                <br />
                Unique!
              </h3>
            </div>
          )}

          {transition((style, item) => (
            <animated.div
              className="item"
              style={{ ...style, background: item.css }}
            >
              {item.title && <h4>{item?.title}</h4>}
              {item.imgUrl && (
                <img
                  src={item.imgUrl}
                  alt="tech icon"
                  className="item__image"
                />
              )}
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
}

export default Intro;
