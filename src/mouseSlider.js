import React, { useEffect } from "react";

const MouseSlider = ({ children }) => {
  useEffect(() => {
    const slider = document.querySelector(".MouseSlider");
    let isDown;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", e => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
    });

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
