/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import Restaurant from './restaurant'

export default class Results extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col">
            <div className="jumbotron">
              <div className="text-center lead">
                <h1 className="display-4 text-center">Enjoy!</h1>
                Zipcode: {this.props.zipcode}
              </div>
            </div>
            <Restaurant
              results={this.props.results}
              keyword={this.props.keyword}
            />
          </div>
          <div className="col">
            <div className="card text-center">
              <img
                className="card-img-top"
                src="cardImage.jpeg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="lead">
                  You can filter food places by any keyword
                </p>
                <form key="Filter" onSubmit={this.props.handleFilter}>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="keyword"
                        type="text"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-secondary">Filter</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
        <div className="row align-items-center">
          <div className="col" />
          <div className="col" />
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
