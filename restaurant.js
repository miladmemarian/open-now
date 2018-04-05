/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class Restaurant extends Component {
  filterResults(keyword, results) {
    return !keyword
      ? results
      : results.filter(
        result =>
          result.formatted_address.includes(keyword) ||
            result.name.includes(keyword)
      )
  }
  render() {
    const filtered = this.filterResults(this.props.keyword, this.props.results)
    const restaurant = filtered.map(result => (
      <div key={result.id}>
        <span style={{ float: 'right' }}>
          <img src={result.photos[0].getUrl({ maxWidth: 80, maxHeight: 80 })} />
        </span>
        <p>Name: {result.name}</p>
        <p>Address: {result.formatted_address}</p>
      </div>
    ))
    return <div>{restaurant}</div>
  }
}
