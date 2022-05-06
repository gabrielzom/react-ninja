'use strict'
import React, { Component } from 'react'
import Button from './button'
class App extends Component {
  render () {
    console.log('render app')
    return (
      <div>
        <Button handleClick={() => alert('Clicked')}>
          Clique here
        </Button>
      </div>
    )
  }
}

export default App
