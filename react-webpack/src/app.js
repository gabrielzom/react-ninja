'use strict'
import React, { Component } from 'react'
import Button from './button.js'
import Square from './square.js'
class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      color: 'green'
    }
  }

  componentWillMount () {
    console.log('will mount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <Square backgroundColor={this.state.color} />
        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
