/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import SearchBar from './searchBar'
import Results from './results'

export default class OpenRestaurants extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      zipcode: ''
    }
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
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <Results zipcode={this.state.zipcode} />
      </div>
    )
  }
}
