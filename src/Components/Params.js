import React, { Component } from "react";

export default class Params extends Component {
  state = {
    paramMaxCompareCount: 2,
  };
  render() {
    return (
      <div className="params">
        <hr />
        <input type='number'></input>
      </div>
    );
  }
}
