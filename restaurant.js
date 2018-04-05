/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    const restaurant = this.props.results.map(result => (
      <div key={result.id}>
        <img src={result.photos[0].getUrl({ maxWidth: 120, maxHeight: 80 })} />
        <div>Name: {result.name}</div>
        <div>Address: {result.formatted_address}</div>
      </div>
    ))
    return <div>{restaurant}</div>
  }
}
