import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import { Motion, spring } from "react-motion";
import About from "./About";

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
  state = {
    left: -200
  };

  handleClick = val => {
    if (val && !isNaN(val)) {
      this.setState({
        left: +val
      });
    }
  };

  reset = () => this.setState({ left: -200 });

  render() {
    return (
      <>
        <Motion
          defaultStyle={{ left: -100 }}
          style={{ left: spring(this.state.left) }}
        >
          {val => (
            <h1
              style={{
                position: "absolute",
                ...val
              }}
            >
              Hello!{" "}
              <span role="img" aria-label="Hand wave">
                👋
              </span>
            </h1>
          )}
        </Motion>

        <input
          type="number"
          placeholder="enter a value"
          ref={input => (this.input = input)}
        />
        <button onClick={() => this.handleClick(this.input.value)}>Set</button>
        <button onClick={this.reset}>Reset</button>

        <About />
        <AnimatedCard />
        <AnimatedCard title="😎 Fancy!" content="Nothing to say" />
        <AnimatedCard />
      </>
    );
  }
}

export default App;
