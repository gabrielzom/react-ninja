'use strict'
import React, { Component } from 'react'
import Timer from './timer.js'
class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('will mount')
  }

  componentDidMount () {
    console.log('did mount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 1 })
        }}>Change Props</button>
      </div>
    )
  }
}

export default App
