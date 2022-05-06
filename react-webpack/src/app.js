'use strict'
import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super()
    this.state = {
      text: 'Gabriel'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => {
        this.state.text === 'Gabriel' ? this.setState({
          text: 'Sales'
        }) : this.setState({
          text: 'Gabriel'
        })
      }}>
        {this.state.text}
      </div >
    )
  }
}

export default App
