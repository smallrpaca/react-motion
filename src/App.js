import React, { useRef } from "react";
import { Link, Route } from "react-router-dom";
import About2 from "./About2";
import About3 from "./About3";
// import Card from "./Card";
// import { Motion, spring } from "react-motion";
// import About from "./About";
// import PhotoGallery from "./photo-gallery/PhotoGallery";
// import PhotoGallery2 from "./photo-gallery/PhotoGallery2";
// import MouseSlider from "./mouseSlider";
// import Svg from "./Svg";

const App = () => {
  return (
    <>
      <Route path="/About2" component={About2} />
      <Route path="/About3" component={About3} />
    </>
  );
};

export default App;

// const AnimatedCard = props => {
//   return (
//     <Motion
//       defaultStyle={{ scale: 0.5 }}
//       style={{
//         scale: spring(1, { stiffness: 60, damping: 10 })
//       }} // stiffness : 강성 , damping: 감쇠 ?
//     >
//       {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
//     </Motion>
//   );
// };
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

{
  /* <>
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
</> */
}
