'use strict'
import React, { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'initial value 2'
    }
  }
  render () {
    console.log('render app')
    return (
      <div>
        <form>
          <input type='text' value={this.state.value}
            onChange={(e) => {
              console.log(e)
              this.setState({
                value: e.target.value
              })
            }}
          />
        </form>
      </div>
    )
  }
}

export default App
