/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class Results extends Component {
  render() {
    const resultsList = this.props.keyword
      ? this.props.results
        .filter(
          result =>
            result.formatted_address.includes(this.props.keyword) ||
              result.name.includes(this.props.keyword)
        )
        .map(result => (
          <li className="list-group-item " key={result.id}>
            {result.name + result.formatted_address}
          </li>
        ))
      : this.props.results.map(result => (
        <li className="list-group-item " key={result.id}>
          {result.name + result.formatted_address}
        </li>
      ))

    return (
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col" />
          <div className="col" />
          <div className="col" />
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="jumbotron">
              <div className="text-center lead">
                <h1 className="display-4 text-center">Enjoy!</h1>
                Zipcode: {this.props.zipcode}
              </div>
            </div>
            <ul className="list-group list-unstyled">{resultsList}</ul>
          </div>
          <div className="col">
            <form key="Filter" onSubmit={this.props.handleFilter}>
              <p>You can filter food places by any keyword</p>
              <input name="keyword" />
              <button>Filter</button>
            </form>
          </div>
          <div className="col" />
        </div>
        <div className="row align-items-end">
          <div className="col" />
          <div className="col" />
          <div className="col" />
        </div>
      </div>
    )
  }
}
