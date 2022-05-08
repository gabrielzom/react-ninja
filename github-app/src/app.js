'use strict'

import React, { Component } from 'react'
import AppContent from './components/appContent'
import github from '../src/api/github.js'
class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repositorys: [],
      starreds: []
    }
  }

  getRepositorys (type) {
    github
      .get(`/users/${this.state.userInfo.login}/${type}`)
      .then(({ data }) => {
        type === 'repos' ? this.setState({
          repositorys: data
        }) : this.setState({
          starreds: data
        })
      })
      .catch(error =>
        console.error('REQUEST FAILED ', error)
      )
  }

  handleSearch (e) {
    if ((e.which || e.keyCode) === 13) {
      e.target.disabled = true
      github
        .get(`/users/${e.target.value}`)
        .then(({ data }) => {
          this.setState({
            userInfo: data
          })
        })
        .catch(error =>
          console.error('RESQUEST FAILED ', error)
        )
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repositorys={this.state.repositorys}
        starreds={this.state.starreds}
        handleSearch={(e) => this.handleSearch(e)}
        handleSeeStarreds={() => this.getRepositorys('starred')}
        handleSeeRepos={() => this.getRepositorys('repos')}
      />
    )
  }
}

export default App
