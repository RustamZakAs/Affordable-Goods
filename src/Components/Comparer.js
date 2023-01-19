import React, { Component } from "react";

export default class Comparer extends Component {
  state = {
    data: {
      firstPrice: 0.0,
      firstValue: 0.0,

      firstResult: 0.0,
      firstResultSymbol: "o",
      firstResultBool: null,

      secondPrice: 0.0,
      secondValue: 0.0,

      secondResult: 0.0,
      secondResultSymbol: "o",
      secondResultBool: null,

      thirdPrice: 0.0,
      thirdValue: 0.0,

      thirdResult: 0.0,
      thirdResultSymbol: "o",
      thirdResultBool: null,
    },
    paramMaxCompareCount: 2,
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

    let third =
      parseFloat(this.state.data.thirdValue) === 0
        ? 0
        : parseFloat(this.state.data.thirdPrice) /
          parseFloat(this.state.data.thirdValue);

    this.setState(
      Object.assign(this.state.data, {
        thirdResult: Math.round(third * 100) / 100,
      })
    );

    const array = new Array();
    if (parseFloat(this.state.data.firstResult) > 0 && this.state.paramMaxCompareCount >= 1)
      array.push(parseFloat(this.state.data.firstResult));
    if (parseFloat(this.state.data.secondResult) > 0 && this.state.paramMaxCompareCount >= 2)
      array.push(parseFloat(this.state.data.secondResult));
    if (parseFloat(this.state.data.thirdResult) > 0 && this.state.paramMaxCompareCount >= 3)
      array.push(parseFloat(this.state.data.thirdResult));

    const minValue = Math.min.apply(Math, array);

    this.setState(
      Object.assign(this.state.data, {
        // firstResult: 0.0,
        firstResultSymbol: symbolX,
        firstResultBool: false,

        // secondResult: 0.0,
        secondResultSymbol: symbolX,
        secondResultBool: false,

        // thirdResult: 0.0,
        thirdResultSymbol: symbolX,
        thirdResultBool: false,
      })
    );

    if (parseFloat(this.state.data.firstResult) === minValue) {
      this.setState(
        Object.assign(this.state.data, {
          firstResultSymbol: symbolV,
          firstResultBool: true,
        })
      );
    }
    if (parseFloat(this.state.data.secondResult) === minValue) {
      this.setState(
        Object.assign(this.state.data, {
          secondResultSymbol: symbolV,
          secondResultBool: true,
        })
      );
    }
    if (parseFloat(this.state.data.thirdResult) === minValue) {
      this.setState(
        Object.assign(this.state.data, {
          thirdResultSymbol: symbolV,
          thirdResultBool: true,
        })
      );
    }

    if (parseFloat(this.state.data.firstResult) === 0) {
      this.setState(
        Object.assign(this.state.data, {
          firstResultSymbol: symbolX,
          firstResultBool: false,
        })
      );
    }
    if (parseFloat(this.state.data.secondResult) === 0) {
      this.setState(
        Object.assign(this.state.data, {
          secondResultSymbol: symbolX,
          secondResultBool: false,
        })
      );
    }
    if (parseFloat(this.state.data.thirdResult) === 0) {
      this.setState(
        Object.assign(this.state.data, {
          thirdResultSymbol: symbolX,
          thirdResultBool: false,
        })
      );
    }
    //console.log(this.state.data);
    const jsonString = JSON.stringify(this.state.data);
    localStorage.setItem("comparer", jsonString);
  };

  firstPriceChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        firstPrice: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  firstValueChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        firstValue: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  secondPriceChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        secondPrice: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  secondValueChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        secondValue: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  thirdPriceChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        thirdPrice: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  thirdValueChanger = (event) => {
    this.setState(
      Object.assign(this.state.data, {
        thirdValue: isNaN(parseFloat(event.target.value))
          ? 0.0
          : parseFloat(event.target.value),
      })
    );
    this.resultComparer();
  };

  componentDidMount() {
    let paramMaxCompareCount = window.localStorage.getItem(
      "paramMaxCompareCount"
    );
    if (!isNaN(paramMaxCompareCount) && parseFloat(paramMaxCompareCount) > 0)
      this.setState({ paramMaxCompareCount: paramMaxCompareCount });
    else this.setState({ paramMaxCompareCount: 1 });

    let comparer = window.localStorage.getItem("comparer");
    comparer = JSON.parse(comparer);
    if (comparer) this.setState({ data: comparer });
    else
      this.setState(
        Object.assign(this.state.data, {
          firstPrice: 0.0,
          firstValue: 0.0,
          firstResultSymbol: symbolX,
          firstResultBool: false,

          secondPrice: 0.0,
          secondValue: 0.0,
          secondResultSymbol: symbolX,
          secondResultBool: false,

          thirdPrice: 0.0,
          thirdValue: 0.0,
          thirdResultSymbol: symbolX,
          thirdResultBool: false,
        })
      );
  }

  render() {
    return (
      <>
        <div className="in-main-form">
          <hr />
          <div
            className="my-row"
            hidden={!(parseInt(this.state.paramMaxCompareCount) >= 1)}
          >
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
                  value={parseFloat(this.state.data.firstPrice)}
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
                  value={parseFloat(this.state.data.firstValue)}
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
          <div
            className="my-row"
            hidden={!(parseInt(this.state.paramMaxCompareCount) >= 2)}
          >
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
                  value={parseFloat(this.state.data.secondPrice)}
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
                  value={parseFloat(this.state.data.secondValue)}
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
          <div
            className="my-row"
            hidden={!(parseInt(this.state.paramMaxCompareCount) >= 3)}
          >
            <div className="compare-col">
              <label for="third-price" className="form-label">
                Third price
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.thirdPriceChanger}
                  name="third-price"
                  id="third-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={parseFloat(this.state.data.thirdPrice)}
                />
              </div>
            </div>
            <div className="compare-col">
              <label for="third-value" className="form-label">
                Third value
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.thirdValueChanger}
                  name="third-value"
                  id="third-price"
                  aria-describedby="basic-addon3"
                  min={0.0}
                  step={0.01}
                  value={parseFloat(this.state.data.thirdValue)}
                />
              </div>
            </div>
            <div className="compare-col compare-result">
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.thirdResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.thirdResult}
              </div>
              <div
                style={this.divStyle}
                className={`result ${
                  this.state.data.thirdResultBool
                    ? " result-true"
                    : " result-false"
                }`}
              >
                {this.state.data.thirdResultSymbol}
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
