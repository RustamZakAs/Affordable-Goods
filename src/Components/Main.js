import React, { Component } from "react";
import Comparer from "./Comparer.js";
import Info from "./Info.js";
import SendToWhatsapp from "./SendToWhatsapp.js";
import Params from "./Params.js";

import back_logoC from "../images/compare.png";
import back_logoW from "../images/Illustration_mobile_whatsapp.png";
import back_logoI from "../images/Infobox_info_icon.svg.png";
import back_logoP from "../images/params.png";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        {this.props.currentFormCode === "C" ? (
          <img src={back_logoC} alt="Compare" className="bg-image" />
        ) : (
          ""
        )}
        {this.props.currentFormCode === "W" ? (
          <img src={back_logoW} alt="Whatsapp" className="bg-image" />
        ) : (
          ""
        )}
        {this.props.currentFormCode === "I" ? (
          <img src={back_logoI} alt="Info" className="bg-image" />
        ) : (
          ""
        )}
        {this.props.currentFormCode === "P" ? (
          <img src={back_logoP} alt="Params" className="bg-image" />
        ) : (
          ""
        )}
        {this.props.currentFormCode === "C" ? (
          <Comparer />
        ) : this.props.currentFormCode === "W" ? (
          <SendToWhatsapp />
        ) : this.props.currentFormCode === "I" ? (
          <Info />
        ) : this.props.currentFormCode === "P" ? (
          <Params />
        ) : (
          ""
        )}
      </div>
    );
  }
}
