'use strict'
import React, { Component } from 'react'
import Square from './square.js'
import colors from './functions/colors.js'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {colors.map((color, index) => (
          <Square key={index} backgroundColor={color} />
        ))}
      </div>
    )
  }
}

export default App
