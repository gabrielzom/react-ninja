'use strict'

import App from './app.js'
import React from 'react'
import { render } from 'react-dom'

render(
    <App/>,
    document.querySelector('[data-js="app"]')
)