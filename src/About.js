import React from "react";
import { Motion, spring } from "react-motion";

const About = () => (
  <Motion defaultStyle={{ x: 100 }} style={{ x: spring(0) }}>
    {interpolatingStyle => (
      <div style={interpolatingStyle}>{interpolatingStyle.x}</div>
    )}
  </Motion>
);

export default About;
