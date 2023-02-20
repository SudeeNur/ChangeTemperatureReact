import React, { Component } from 'react'
import {  Row, Col } from 'reactstrap'
import Celcius from './Celcius'
import Fahrenheit from './Fahrenheit'
import Kelvin from './Kelvin'



export default class Temperature extends Component {
  render() {
    return (
      <div>

            <Row className='mt-2'>
            <h6>3 birimde sıcaklık ölçümü</h6>

            </Row>

            <Row className='mt-4'>
                <Col><Celcius sicaklik1={this.props.sicaklik}/></Col>
                <Col><Fahrenheit  sicaklik2={this.props.sicaklik}/></Col>
                <Col><Kelvin  sicaklik3={this.props.sicaklik}/></Col>
            </Row>

      </div>
    )
  }
}