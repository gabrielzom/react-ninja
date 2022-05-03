'use strict'

import App from './app.js'
import renderApp from './functions/renderApp.js'

renderApp(App)

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
