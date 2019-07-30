import React, { useRef } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const scrollToRef = ref => {
  console.log(ref.current.offsetLeft);
  window.scrollTo(ref.current.offsetLeft, 0);
};

const About2 = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div
        style={{
          left: 0
        }}
      >
        <Link to="/About3" onClick={executeScroll}>
          안녕
        </Link>
      </div>
      <div
        style={{
          left: "100%"
        }}
      >
        안녕
      </div>
      <div
        style={{
          left: "200%"
        }}
        ref={myRef}
      >
        안녕
      </div>
    </>
  );
};

export default About2;
