import React from "react";
import { Motion, spring } from "react-motion";
import "./PhotoGallery.css";
import PhotoItem from "./photos/PhotoItem";

const springSettings = { stiffness: 170, damping: 26 };
const NEXT = "show-next";

export default class PhotoGallery2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [[100, 100], [500, 500], [500, 500], [500, 500]],
      currPhoto: 0
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ currPhoto: value });
  };

  handleClick = value => {
    this.setState({ currPhoto: value });
  };

  clickHandler = btn => {
    let photoIndex =
      btn === NEXT ? this.state.currPhoto + 1 : this.state.currPhoto - 1;

    photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
    photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

    this.setState({
      currPhoto: photoIndex
    });
  };

  render() {
    const { photos, currPhoto } = this.state;
    const [currWidth, currHeight] = photos[currPhoto];

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
        <button onClick={this.clickHandler.bind(null, "")}>Previous</button>
        <button onClick={this.clickHandler.bind(null, NEXT)}>Next</button>
        <div className="demo3">
          <Motion
            style={{ height: spring(currHeight), width: spring(currWidth) }}
          >
            {container => (
              <div className="demo3-inner" style={container}>
                {configs.map((style, i) => (
                  <Motion key={i} style={style}>
                    {style => (
                      <img
                        className="demo3-photo"
                        src={PhotoItem[i].image}
                        style={style}
                        alt={PhotoItem[i].image}
                        onClick={e => this.handleClick(i)}
                      />
                    )}
                  </Motion>
                ))}
              </div>
            )}
          </Motion>
        </div>
        <input
          type="range"
          min={0}
          max={photos.length - 1}
          value={currPhoto}
          onChange={this.handleChange}
        />
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
                        src={PhotoItem[i].image}
                        style={style}
                        alt={PhotoItem[i].image}
                        onClick={e => this.handleClick(i)}
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
  }
}
