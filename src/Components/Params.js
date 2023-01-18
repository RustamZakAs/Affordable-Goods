import React, { Component } from "react";

export default class Params extends Component {
  state = {
    paramMaxCompareCount: 2,
  };
  componentDidMount() {
    let paramMaxCompareCount = window.localStorage.getItem("paramMaxCompareCount");
    if (!isNaN(paramMaxCompareCount) && parseFloat(paramMaxCompareCount) > 0)
      this.setState({ paramMaxCompareCount: paramMaxCompareCount });
    else this.setState({ paramMaxCompareCount: 1 });
  }
  render() {
    return (
      <div className="in-main-form">
        <hr />
        <form>
          <div className="input-group mb-3">
            <label for="whatsappNumber" className="form-label">
              Compare form count
            </label>
            <div className="input-group mb-3">
              <input
                type="number"
                min={1}
                max={3}
                step={1}
                value={this.state.paramMaxCompareCount}
                onChange={(event) => {
                  this.setState({paramMaxCompareCount: parseInt(event.target.value),});
                  alert('Data saved!');
                }}
                className="form-control"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="1"
                aria-label="Recipient phone"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={(event) => {
                    console.log(this.state.paramMaxCompareCount);
                    localStorage.setItem("paramMaxCompareCount", parseInt(this.state.paramMaxCompareCount));
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
