import React, { Component } from 'react'

export default class Menu extends Component {
  divStyle = {
    marginBottom: "0px",
  };

  onClickC = () => {
    this.props.getter('C')
  }

  onClickW = () => {
    this.props.getter('W')
  }

  onClickI = () => {
    this.props.getter('I')
  }

  selected = {
    border: '2px solid black',
  }

  unselected = {
    border: '0px solid black',
  }

  render() {
    let styleC = this.props.formCode === 'C' ? this.selected : this.unselected;
    let styleW = this.props.formCode === 'W' ? this.selected : this.unselected;
    let styleI = this.props.formCode === 'I' ? this.selected : this.unselected;
    return (
      <div className='menu menu-type-2'>
        <div style={styleC} className='menu-item' onClick={this.onClickC}>
            <p style={this.divStyle} className='compare-icon'>≠</p>
            <p>Compare</p>
        </div>
        <div style={styleW} className='menu-item' onClick={this.onClickW}>
            <p style={this.divStyle} className='keyboard-icon'>⌨</p>
            <p>Send by Whatsapp</p>
        </div>
        <div style={styleI} className='menu-item' onClick={this.onClickI}>
            <p style={this.divStyle} className='star-icon'>★</p>
            <p>Info</p>
        </div>
      </div>
    )
  }
}
