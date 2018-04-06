/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    const imageUrl = this.props.results.photos[0].getUrl({
      maxWidth: 300,
      maxHeight: 200
    })
    return (
      <div className="col-sm-3" key={this.props.results.id}>
        <div className="card h-60 border-0 ">
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover'
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.results.name}</h5>
            <p className="card-text">{this.props.results.formatted_address}</p>
          </div>
        </div>
      </div>
    )
  }
}
