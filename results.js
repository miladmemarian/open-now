/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import Restaurant from './restaurant'

export default class Results extends Component {
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
    return (
      <div>
        <div className="card border-0">
          <div
            className="card-body"
            style={{
              height: '50vh',
              backgroundImage: 'url(cardImage.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="card-body text-center">
            <p className="lead">You can filter food places by any keyword</p>
            <form key="Filter" onSubmit={this.props.handleFilter}>
              <div className="form-group">
                <div className="input-group">
                  <input className="form-control" name="keyword" type="text" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary">Filter</button>
                  </div>
                </div>
              </div>
            </form>
            <h3 className="heading text-muted" style={{ float: 'left' }}>
              Zip Code: {this.props.zipcode}
            </h3>
          </div>
        </div>
        <div className="container-fluid content-raw">
          <div className="row ">
            {filtered.map(result => (
              <Restaurant key={result.id} results={result} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
