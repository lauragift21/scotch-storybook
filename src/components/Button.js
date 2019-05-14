import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
  state = {
    click: true
   }
   handleClick(e) {
    e.preventDefault()
     alert('clicked successful')
   }
  render() {
    return (
      <button onClick={this.handleClick}> This is a button </button>
     );
  }
}

export default Button;