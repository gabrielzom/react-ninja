'use strict'

import React from 'react'

const Title = ({name, surname}) => (
  <h1>{`Hello, ${name} ${surname} ! `}</h1>
)

Title.defaultProps = {
  name: 'Unknown',
  surname: 'Without Surname'
}

export default Title
