/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import SearchBar from './searchBar'
import Results from './results'

export default class OpenRestaurants extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.state = {
      zipcode: '',
      results: '',
      keyword: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.setState({
      zipcode: formData.get('zipcode')
    })

    var request = {
      query: formData.get('zipcode'),
      open_now: true,
      type: 'restaurant'
    }
    var map = new google.maps.Map(document.querySelector('#map'))
    var service = new google.maps.places.PlacesService(map)
    service.textSearch(request, getResult.bind(this))

    function getResult(response) {
      this.setState({
        results: response
      })
    }
  }

  handleFilter(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.setState({
      keyword: formData.get('keyword')
    })
  }

  render() {
    const zipcodeSubmitted = this.state.results ? (
      <Results
        handleFilter={this.handleFilter}
        zipcode={this.state.zipcode}
        results={this.state.results}
        keyword={this.state.keyword}
      />
    ) : (
      <SearchBar handleSubmit={this.handleSubmit} />
    )
    return (
      <div>
        <div id="map" />
        <div>{zipcodeSubmitted}</div>
      </div>
    )
  }
}
