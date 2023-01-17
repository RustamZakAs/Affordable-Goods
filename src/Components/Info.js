import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <hr />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Affordable Goods</h5>
            <p className="card-text">
              This application created that compare product pricing.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Compare price by weight</li>
            <li className="list-group-item">Compare price by pc</li>
            <li className="list-group-item">Compare price by count</li>
            <li className="list-group-item">Sending Whatsapp message this out adding number in contacts</li>
          </ul>
          {/* <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div> */}
        </div>
      </div>
    );
  }
}
