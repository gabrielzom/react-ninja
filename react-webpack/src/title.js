'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Unknown',
      surname: 'Without Surname'
    }
  },

  render: function () {
    return <h1>Hello, {this.props.name} {this.props.surname} !</h1>
  }
})

export default Title
