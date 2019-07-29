import React, { useState, useEffect } from "react";

const MouseSlider = ({ children }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = document.querySelector(".MouseSlider");
    slider.addEventListener("mousedown", e => {
      setIsDown(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    });
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".MouseSlider");
    slider.addEventListener("mouseleave", () => {
      setIsDown(false);
    });
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".MouseSlider");
    slider.addEventListener("mouseup", () => {
      setIsDown(false);
    });
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".MouseSlider");
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <div
      className="MouseSlider"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "scroll",
        background: "black"
      }}
    >
      {children}
    </div>
  );
};

export default MouseSlider;
