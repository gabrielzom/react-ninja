'use strict'
import React from 'react'
import Title from './title.js'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Title name='Gabriel' surname='Sales' />
      </div>
    )
  }
}

export default App
