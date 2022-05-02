'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp/>
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

export default renderApp