'use strict'

import App from './app.js'
import React from 'react'
import renderApp from './functions/renderApp.js'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

renderApp(App)

if(module.hot) {
    module.hot.accept('./app.js', () => {
        const NextApp = require('./app').default;
        renderApp(NextApp)
    })
}