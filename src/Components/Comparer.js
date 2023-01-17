import React, { Component } from "react";

export default class Comparer extends Component {
  state = {
    data: {
      firstPrice: 0.0,
      firstValue: 0.0,

      secondPrice: 0.0,
      secondValue: 0.0,

      firstResult: 0.0,
      firstResultSymbol: "o",
      firstResultBool: null,

      secondResult: 0.0,
      secondResultSymbol: "o",
      secondResultBool: null,
    },
  };

  divStyle = {
    marginLeft: "5px",
  };

  resultComparer = (event) => {
    const symbolX = "✖";
    const symbolV = "✓";
    let first =
      parseFloat(this.state.data.firstValue) === 0
        ? 0
        : parseFloat(this.state.data.firstPrice) /
          parseFloat(this.state.data.firstValue);

    this.setState(
      Object.assign(this.state.data, {
        firstResult: Math.round(first * 100) / 100,
      })
    );

    let second =
      parseFloat(this.state.data.secondValue) === 0
        ? 0
        : parseFloat(this.state.data.secondPrice) /
          parseFloat(this.state.data.secondValue);
    this.setState(
      Object.assign(this.state.data, {
        secondResult: Math.round(second * 100) / 100,
      })
    );

    if (parseFloat(first) > parseFloat(second)) {
      this.setState(
        Object.assign(this.state.data, { 
          firstResultSymbol: symbolX, 
          firstResultBool: false, 
          secondResultSymbol: symbolV,
          secondResultBool: true
         })
      );
    } else if (parseFloat(first) < parseFloat(second)) {
      this.setState(
        Object.assign(this.state.data, { 
          firstResultSymbol: symbolV,
          firstResultBool: true,
          secondResultSymbol: symbolX,
          secondResultBool: false
        })
      );
    } else if (parseFloat(first) === 0 && parseFloat(second) === 0) {
      this.setState(
        Object.assign(this.state.data, { 
          firstResultSymbol: symbolX,
          firstResultBool: false,
          secondResultSymbol: symbolX,
          secondResultBool: false
        })
      );
    } else {
      this.setState(
        Object.assign(this.state.data, { 
          firstResultSymbol: symbolV,
          firstResultBool: true,
          secondResultSymbol: symbolV,
          secondResultBool: true
        })
      );
    }
    if (parseFloat(first) === 0) {
      this.setState(
        Object.assign(this.state.data, { 
          firstResultSymbol: symbolX,
          firstResultBool: false
        })
      );
    }
    if (parseFloat(second) === 0) {
      this.setState(
        Object.assign(this.state.data, { 
          secondResultSymbol: symbolX,
          secondResultBool: false
        })
      );
    }
    console.log(this.state.data);
    const jsonString = JSON.stringify(this.state.data);
    localStorage.setItem("comparer", jsonString);
  };

  firstPriceChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        firstPrice: isNaN(parseFloat(event.target.value)) ? 0.00 : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  firstValueChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        firstValue: isNaN(parseFloat(event.target.value)) ? 0.00 : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  secondPriceChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        secondPrice: isNaN(parseFloat(event.target.value)) ? 0.00 : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  secondValueChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        secondValue: isNaN(parseFloat(event.target.value)) ? 0.00 : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  componentDidMount() {
    let comparer = window.localStorage.getItem("comparer");
    comparer = JSON.parse(comparer);
    if (comparer) this.setState({ data: comparer });
  }

  render() {
    return (
      <>
        <div className="comparer">
          <hr />
          <div className="my-row">
            <div className="compare-col">
              <label for="first-price" className="form-label">
                First price
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.firstPriceChanger}
                  name="first-price"
                  id="first-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={this.state.data.firstPrice}
                />
              </div>
            </div>
            <div className="compare-col">
              <label for="first-value" className="form-label">
                First value
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.firstValueChanger}
                  name="first-value"
                  id="first-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={this.state.data.firstValue}
                />
              </div>
            </div>
            <div className="compare-col compare-result">
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.firstResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.firstResult}
              </div>
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.firstResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.firstResultSymbol}
              </div>
            </div>
          </div>
          <div className="my-row">
            <div className="compare-col">
              <label for="second-price" className="form-label">
                Second price
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.secondPriceChanger}
                  name="second-price"
                  id="second-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={this.state.data.secondPrice}
                />
              </div>
            </div>
            <div className="compare-col">
              <label for="second-value" className="form-label">
                Second value
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.secondValueChanger}
                  name="second-value"
                  id="second-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={this.state.data.secondValue}
                />
              </div>
            </div>
            <div className="compare-col compare-result">
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.secondResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.secondResult}
              </div>
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.secondResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.secondResultSymbol}
              </div>
            </div>
          </div>
          <div className="my-row">
            <button className="btn btn-primary" onClick={this.resultComparer}>
              Compare
            </button>
          </div>
        </div>
      </>
    );
  }
}
