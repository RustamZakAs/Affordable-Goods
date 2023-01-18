import React, { Component } from "react";

export default class SendToWhatsapp extends Component {
  state = {
    wnumber: "994",
    wnumbers: new Array(),
  };

  onChange = (e) => {
    this.setState({ wnumber: e.target.value });
    window.localStorage.setItem("wnumber", e.target.value);
  };

  onCliked = (e) => {
    this.openInNewTab(`https://wa.me/${this.state.wnumber}`);

    let nums = this.state.wnumbers;
    if (nums == null) nums = new Array();
    nums.push(this.state.wnumber);
    nums = nums.reverse();
    let wnumberJson = JSON.stringify(nums);
    window.localStorage.setItem("wnumbers", wnumberJson);
    this.setState({ wnumbers: nums });
  };

  openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  componentDidMount() {
    let wnumber = window.localStorage.getItem("wnumber");
    wnumber = wnumber ?? "994";
    this.setState({ wnumber, wnumber });

    let wnumbers = window.localStorage.getItem("wnumbers");
    wnumbers = JSON.parse(wnumbers);
    this.setState({ wnumbers, wnumbers });
  }

  render() {
    return (
      <div className="send-to-whatsapp">
        <hr />
        <div className="input-group mb-3">
          <label for="whatsappNumber" className="form-label">
            Recipient phone
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              min={994}
              step={1}
              value={this.state.wnumber}
              onChange={this.onChange}
              className="form-control"
              name="whatsappNumber"
              id="whatsappNumber"
              placeholder="994991234567"
              aria-label="Recipient phone"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={this.onCliked}
              >
                Open
              </button>
            </div>
          </div>
        </div>
        <ul class="list-group">
          {this.state.wnumbers?.map((elem) =>
            elem.toString().length > 0 ? (
              <li className="list-group-item">{elem}</li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    );
  }
}
