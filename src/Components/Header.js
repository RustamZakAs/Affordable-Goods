import React, { Component } from 'react'

import imgC from '../images/processing-information-view.png'
import imgW from '../images/Illustration_mobile_whatsapp.png'
import imgI from '../images/people-looking-through-magnifying.png'
 
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-img-div'>
          <img className='header-img' src={this.props.formCode === 'C' ? imgC : this.props.formCode === 'W' ? imgW : imgI}></img>
          <span className='header-text'>{this.props.formCode === 'C' ? "Comparer" : this.props.formCode === 'W' ? "Send to Whatsapp" : this.props.formCode === 'I' ? "Info" : ""}</span>
        </div>
      </div>
    )
  }
}