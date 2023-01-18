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
  
  render() {
    const styleItemC = 'menu-item ' + (this.props.formCode === 'C' ? 'selected' : '')
    const styleItemW = 'menu-item ' + (this.props.formCode === 'W' ? 'selected' : '')
    const styleItemI = 'menu-item ' + (this.props.formCode === 'I' ? 'selected' : '')
    return (
      <div className='menu menu-type-2'>
        <div className={styleItemC} onClick={this.onClickC}>
            <p style={this.divStyle} className='compare-icon'>≠</p>
            <p>Compare</p>
        </div>
        <div className={styleItemW} onClick={this.onClickW}>
            <p style={this.divStyle} className='keyboard-icon'>⌨</p>
            <p>Send by Whatsapp</p>
        </div>
        <div className={styleItemI} onClick={this.onClickI}>
            <p style={this.divStyle} className='star-icon'>★</p>
            <p>Info</p>
        </div>
      </div>
    )
  }
}
