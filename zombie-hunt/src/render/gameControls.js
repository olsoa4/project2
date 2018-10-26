import React from "react";
import leftArrow from "../imgs/arrows/leftArrow.png"; //image path placeholder
import rightArrow from "../imgs/arrows/rightArrow.png"; //image path placeholder
import upArrow from "../imgs/arrows/upArrow.png"; //image path placeholder
import downArrow from "../imgs/arrows/downArrow.png"; //image path placeholder
// import database from "../firebase/firebase";

export default class GameControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  left = event => {
    console.log("left");
  };
  right = event => {
    console.log("right");
  };
  up = event => {
    console.log("up");
  };
  down = event => {
    console.log("down");
  };

  render() {
    return (
      <div>
        <h2 className="Sub-heading">Controls:</h2>
        <button className="left">
          {
            <img
              src={leftArrow}
              className="img-fluid"
              alt="left"
              onClick={this.left}
            />
          }
        </button>

        <button className="up">
          {
            <img
              src={upArrow}
              className="img-fluid"
              alt="up"
              onClick={this.up}
            />
          }
        </button>

        <button className="down">
          {
            <img
              src={downArrow}
              className="img-fluid"
              alt="Down"
              onClick={this.down}
            />
          }
        </button>

        <button className="right">
          {
            <img
              src={rightArrow}
              className="img-fluid"
              alt="right"
              onClick={this.right}
            />
          }
        </button>
      </div>
    );
  }
}
