'use strict'

import Title from './app.js'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)