'use strict'

import React from 'react'

const Square = ({ backgroundColor }) => (
  <div onClick={() => {
    alert(`Clicked in ${backgroundColor} div !`)
  }} style={{
    backgroundColor,
    height: '10px',
    width: '500px'
  }} />
)

Square.defaultProps = {
  backgroundColor: 'red'
}

export default Square
