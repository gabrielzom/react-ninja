'use strict'

import App from './app.js'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
)