'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }
    this.timer
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('will update timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('did update', this.props, prevProps, ' | ', this.state, prevState)
  }

  componentWillReceiveProps (nextProps) {
    console.log(`will recieve props timer `, this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('should component update timer', this.state, nextState)
    return this.props.time !== nextProps.time
  }

  componentDidMount () {
    console.log('did mount timer')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('will unmount timer')
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return <div>Timer: { this.state.time}</div>
  }
}

export default Timer
