import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div><button>Kelvin = {(this.props.sicaklik3 +273.15)}</button></div>
    )
  }
}