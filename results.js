/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

const restaurants = [
  {
    id: 0,
    formatted_address: '14805 Jeffrey RD, Irvine, CA 92618, USA',
    name: 'A&J Restaurants'
  },
  {
    id: 1,
    formatted_address: '74805 Jeffrey RD, Irvine, CA 91618, USA',
    name: 'B Restaurants'
  },
  {
    id: 2,
    formatted_address: '12805 Robins DR, Irvine, CA 92618, USA',
    name: 'Sam Restaurants'
  }
]

export default class Results extends Component {
  render() {
    const resultsList = restaurants.map(restaurant => (
      <li key={restaurant.id}>
        {restaurant.name + restaurant.formatted_address}
      </li>
    ))
    return <ul>{resultsList}</ul>
  }
}
