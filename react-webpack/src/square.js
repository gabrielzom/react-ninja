'use strict'

import React from 'react'

const Square = ({ backgroundColor }) => (
  <div onClick={() => {
    alert(`Clicked in ${backgroundColor} div !`)
  }} style={{
    backgroundColor,
    height: '130px',
    width: '130px'
  }} />
)

Square.defaultProps = {
  backgroundColor: 'red'
}

export default Square
