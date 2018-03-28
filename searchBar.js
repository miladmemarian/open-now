/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <form key="Search" onSubmit={this.props.handleSubmit}>
        <h1>Hungry?</h1>
        <h5>Please enter your zip code</h5>
        <input name="zipcode" type="number" />
        <div>
          <button name="Submit">Search</button>
        </div>
      </form>
    )
  }
}
