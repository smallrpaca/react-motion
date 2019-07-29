import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import { Motion, spring } from "react-motion";
import About from "./About";
// import PhotoGallery from "./photo-gallery/PhotoGallery";
import PhotoGallery2 from "./photo-gallery/PhotoGallery2";
import MouseSlider from "./mouseSlider";

const AnimatedCard = props => {
  return (
    <Motion
      defaultStyle={{ scale: 0.5 }}
      style={{
        scale: spring(1, { stiffness: 60, damping: 10 })
      }} // stiffness : 강성 , damping: 감쇠 ?
    >
      {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
    </Motion>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <MouseSlider>
          <div
            className="item"
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              backgroundColor: "white",
              top: 0,
              left: 0
            }}
          >
            안녕
          </div>
          <div
            className="item"
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              backgroundColor: "white",
              top: 0,
              left: "100%"
            }}
          >
            안녕
          </div>
        </MouseSlider>
      </>
    );
  }
}

export default App;

{
  /* <About />
        <AnimatedCard title="😎 Fancy!" content="Nothing to say" />
        <AnimatedCard />
        <PhotoGallery2 />
        <img
          src="./15.jpg"
          style={{
            width: 500,
            height: 500
          }}
          alt="Hello"
        /> */
}
