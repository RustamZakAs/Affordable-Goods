import React, { Component } from "react";
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Menu from './Components/Menu.js';
import './fonts/Roboto/Roboto-Black.ttf';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class App extends Component {
  state = {
    currentFormCode: 'C',
    getCurrentFormCode: (value) => {
      console.log(value);
      this.setState({currentFormCode: value});
    }
  }

  render() {
    return <div className="app">
      <Header formCode={this.state.currentFormCode} />
      <Main currentFormCode={this.state.currentFormCode}  />
      <Menu getter={this.state.getCurrentFormCode} formCode={this.state.currentFormCode}/> 
    </div>;
  }
}
