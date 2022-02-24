import React from "react";
import {
  useChain,
  animated,
  useSpringRef,
  useSpring,
  useTransition,
} from "react-spring";
import { values } from "./data";

function Intro2() {
  // Build a spring and catch its ref
  const springRef = useSpringRef();
  const props = useSpring({ ...values, ref: springRef });
  // Build a transition and catch its ref
  const transitionRef = useSpringRef();
  const transitions = useTransition({ ...values, ref: transitionRef });
  // First run the spring, when it concludes run the transition
  useChain([springRef, transitionRef]);
  // Use the animated props like always
  return (
    <animated.div style={props}>
      {transitions((styles) => (
        <animated.div style={styles} />
      ))}
    </animated.div>
  );

  // return <div>index</div>;
}

export default Intro2;
