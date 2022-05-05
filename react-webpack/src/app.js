'use strict'
import React, { Component } from 'react'
import LikeButton from './like-button.js'
import SearchButton from './search-button.js'

class App extends Component {
  render () {
    return (
      <div className='container'>
       <LikeButton />
       <SearchButton />
      </div >
    )
  }
}

export default App
