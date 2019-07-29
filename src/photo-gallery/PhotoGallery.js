import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import "./PhotoGallery.css";
import { photoItem } from "./PhotoItem";

const springSettings = {
  stiffness: 170,
  damping: 26
};
const NEXT = "show-next";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currPhoto, setCurrphoto] = useState(0);
  const [currWidth, currHeight] = photos[currPhoto];

  // 포토 정의
  setPhotos([[500, 350], [800, 600], [800, 400], [700, 500]]);

  const handleChange = ({ target: { value } }) => {
    setCurrphoto(value);
  };

  const clickHandler = btn => {
    let photoIndex = btn === NEXT ? currPhoto + 1 : currPhoto - 1;

    photoIndex = photoIndex >= 0 ? photoIndex : photos.length - 1;
    photoIndex = photoIndex >= photos.length ? 0 : photoIndex;

    setCurrphoto(photoIndex);
  };

  const widths = photos.map(([origW, origH]) => (currHeight / origH) * origW);

  const leftStartCoords = widths
    .slice(0, currPhoto)
    .reduce((sum, width) => sum - width, 0);

  let configs = [];
  photos.reduce((prevLeft, [origW, origH], i) => {
    configs.push({
      left: spring(prevLeft, springSettings),
      height: spring(currHeight, springSettings),
      width: spring(widths[i], springSettings)
    });

    return prevLeft + widths[i];
  }, leftStartCoords);

  return (
    <div>
      <div>Scroll Me</div>
      <button onClick={clickHandler.bind(null, "")}>Previous</button>
      <input
        type="range"
        min={0}
        max={photos.length - 1}
        value={currPhoto}
        onChange={handleChange}
      />
      <button onClick={clickHandler.bind(null, NEXT)}>Next</button>
      <div className="demo4">
        <Motion
          style={{ height: spring(currHeight), width: spring(currWidth) }}
        >
          {container => (
            <div className="demo4-inner" style={container}>
              {configs.map((style, i) => (
                <Motion key={i} style={style}>
                  {style => (
                    <img
                      className="demo4-photo"
                      src={photoItem[i]}
                      style={style}
                      alt={photoItem}
                    />
                  )}
                </Motion>
              ))}
            </div>
          )}
        </Motion>
      </div>
    </div>
  );
};

export default PhotoGallery;
