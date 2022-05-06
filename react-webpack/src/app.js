'use strict'
import React, { Component } from 'react'
import Timer from './timer.js'
class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
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
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show | Hide Timer</button>
      </div>
    )
  }
}

export default App
