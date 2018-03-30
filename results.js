/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class Results extends Component {
  render() {
    const resultsList = this.props.results.map(result => (
      <li key={result.id}>{result.name + result.formatted_address}</li>
    ))
    return (
      <div>
        Zipcode: {this.props.zipcode}
        <ul>{resultsList}</ul>
      </div>
    )
  }
}
