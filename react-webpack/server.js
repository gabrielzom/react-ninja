'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats : { colors: true }
}).listen(3000, (err) => {
    if(err) {
        return console.log('-- Error in the server: ' + err)

    } else {
        console.log('-- Server listening in http://localhost:3000')
    }
})