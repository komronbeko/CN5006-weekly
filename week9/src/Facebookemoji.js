import "./App.css";
import React from "react";
import Like from "./like.png";
import Love from "./Love.png";
import Sad from "./sad.png";

class FacebookEmojiCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.increment = this.increment.bind(this);
    this.pic = null;
    if (this.props.type === "Love") this.pic = Love;
    else if (this.props.type === "Like") this.pic = Like;
    else if (this.props.type === "Sad") this.pic = Sad;
  }

  increment() {
    this.setState((prev) => {
      return { number: prev.number + 1 };
    });
  }

  render() {
    return (
      <div>
        <h5>
          It is {this.state.number}
          {this.props.type}.
        </h5>
        <button onClick={this.increment}>
          <img src={this.pic} alt=" " />
          <b>{this.state.number} </b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;
