import React, { useRef } from "react";
import "./App.css";
import { Link } from "react-router-dom";
const scrollToRef = ref => {
  console.log(ref.current.offsetLeft);
  window.scrollTo(ref.current.offsetLeft, 0);
  console.log(window.scrollTo(ref.current.offsetLeft, 0));
};
const About3 = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div
        style={{
          left: 0
        }}
        ref={myRef}
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
        호우
      </div>
      <div
        style={{
          left: "200%"
        }}
      >
        <Link to="/About2" onClick={executeScroll}>
          호우
        </Link>
      </div>
    </>
  );
};

export default About3;
