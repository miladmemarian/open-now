/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Results from './results'
import SearchBar from './searchBar'

ReactDOM.render(
  <div>
    <SearchBar />
    <Results />
  </div>,
  document.querySelector('#app')
)
