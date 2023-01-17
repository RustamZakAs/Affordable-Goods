import React, { Component } from "react";

export default class SendToWhatsapp extends Component {
  state = {
    wnumber: '994',
  }

  onChange = (e) => {
    this.setState({wnumber: e.target.value});
    window.localStorage.setItem('wnumber', e.target.value);
  }
  onCliked = (e) => {
    this.openInNewTab(`https://wa.me/${this.state.wnumber}`);
  }
  
  openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  componentDidMount() {
    let wnumber = window.localStorage.getItem('wnumber');
    wnumber = wnumber ?? '994';
    this.setState({ wnumber, wnumber });
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
      </div>
    );
  }
}