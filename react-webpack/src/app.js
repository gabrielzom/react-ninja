'use strict'
import React, { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'initial value 2',
      checked: false
    }
  }
  render () {
    console.log('render app')
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.value}
            onChange={(e) => {
              console.log(e)
              this.setState({
                value: e.target.value
              })
            }}
          />

          <label>
            <input
              type='checkbox'
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({ checked: e.target.checked })
              }}
              />
            Checklist
          </label>

          <input
            type='radio'
            defaultChecked
            name='radio'
            value='rd1'
          /> Radio One

          <input
            type='radio'
            name='radio'
            value='rd2'
          /> Radio Two
        </form>
      </div>
    )
  }
}

export default App
