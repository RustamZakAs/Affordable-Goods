import React, { Component } from "react";

import imgC from "../images/processing-information-view.png";
import imgW from "../images/Illustration_mobile_whatsapp.png";
import imgI from "../images/people-looking-through-magnifying.png";
import imgP from "../images/params.png";

import "../font-awesome-4.7.0/css/font-awesome.min.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-img-div">
          <img
            className="header-img"
            src={
              this.props.formCode === "C"
                ? imgC
                : this.props.formCode === "W"
                ? imgW
                : this.props.formCode === "I"
                ? imgI
                : imgP
            }
          ></img>
          <span className="header-text">
            {this.props.formCode === "C"
              ? "Comparer"
              : this.props.formCode === "W"
              ? "Send to Whatsapp"
              : this.props.formCode === "I"
              ? "Info"
              : this.props.formCode === "P"
              ? "Params"
              : ""}
          </span>
        </div>
        <div className="header-right-icon">
          <i class="fa fa-align-justify fa-2x" aria-hidden="false"></i>
        </div>
      </div>
    );
  }
}
