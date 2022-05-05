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
        if (this.state.text === 'Gabriel') {
          return (
            this.setState({
              text: 'Sales'
            })
          )
        } else {
          return (
            this.setState({
              text: 'Gabriel'
            })
          )
        }
      }}>
        {this.state.text}
      </div >
    )
  }
}

export default App
