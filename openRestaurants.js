/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import SearchBar from './searchBar'
import Results from './results'

export default class OpenRestaurants extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      zipcode: ''
      // results: ''
    }
    const results = []
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.setState({
      zipcode: formData.get('zipcode')
    })
    event.target.reset()
  }

  render() {
    const zipcodeSubmitted = this.state.zipcode ? (
      <Results zipcode={this.state.zipcode} results={this.props.results} />
    ) : (
      <SearchBar handleSubmit={this.handleSubmit} />
    )
    return <div>{zipcodeSubmitted}</div>
  }
}
