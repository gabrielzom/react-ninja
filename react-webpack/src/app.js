'use strict'

const React = require('react')

const Title = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'My first component')
    }
})

module.exports = Title