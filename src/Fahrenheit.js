import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div><button>Fahrenheit = {(this.props.sicaklik2*1.8)+32}</button></div>
    )
  }
}