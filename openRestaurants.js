/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import SearchBar from './searchBar'
import Results from './results'

export default class OpenRestaurants extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Results />
      </div>
    )
  }
}
