/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

let restaurants = []
//   {
//     id: 0,
//     formatted_address: '14805 Jeffrey RD, Irvine, CA 92618, USA',
//     name: 'A&J Restaurants'
//   },
//   {
//     id: 1,
//     formatted_address: '74805 Jeffrey RD, Irvine, CA 91618, USA',
//     name: 'B Restaurants'
//   },
//   {
//     id: 2,
//     formatted_address: '12805 Robins DR, Irvine, CA 92618, USA',
//     name: 'Sam Restaurants'
//   }
// ]

export default class Results extends Component {
  componentWillMount() {
    var request = {
      query: this.props.zipcode,
      open_now: true,
      type: 'restaurant'
    }

    var map = new google.maps.Map(document.querySelector('#app'))
    var service = new google.maps.places.PlacesService(map)
    service.textSearch(request, getResult)

    function getResult(response, props) {
      // this.setState({
      //   results: response
      // })
      this.props.results = response
      console.log(this.props.results)
    }
  }

  render() {
    const resultsList = restaurants
      // .filter(restaurant =>
      //   restaurant.formatted_address.includes(this.props.zipcode)
      // )
      .map(restaurant => (
        <li key={restaurant.id}>
          {restaurant.name + restaurant.formatted_address}
        </li>
      ))
    console.log(resultsList)
    return (
      <div>
        Zip Code: {this.props.zipcode}
        <ul>{resultsList}</ul>
      </div>
    )
  }
}
