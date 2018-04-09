import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col" />
          <div className="col" style={{ height: '15rem' }} />
          <div className="col" />
        </div>
        <div className="row align-items-center">
          <div className="col" />
          <div className="col">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Hungry?</h1>
              <p className="lead text-center" style={{ height: '4rem' }}>
                Please enter your zip code
              </p>
              <form key="Search" onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      name="zipcode"
                      type="number"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-secondary">Search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
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
