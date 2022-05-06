'use strict'
import React, { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '1',
      checked: false
    }
  }
  render () {
    console.log('render app')
    return (
      <div>
        <form
          onChange={(e) => {
            console.log('event onchange --> ', e)
          }}

          onSubmit={(e) => {
            e.preventDefault()
            console.log('event onsubmit --> ', e)
          }}
        >
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
            value='Integra'
          /> Radio One

          <input
            type='radio'
            name='radio'
            value='Portal'
          /> Radio Two
          <br />

          <label>
            Select One
            <select value={this.state.value} onChange={(e) => {
              this.setState({
                value: e.target.value
              })
            }}>
              <option value='1'>option 1</option>
              <option value='2'>option 2</option>
              <option value='3'>option 3</option>
            </select>
          </label>
          <br />

          <textarea name='comment' defaultValue={'default\nvalue'} />

          <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default App
