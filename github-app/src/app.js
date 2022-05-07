'use strict'

import React, { Component } from 'react'
import AppContent from './components/appContent'
import github from '../src/api/github.js'
class App extends Component{
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
        .catch(error => console.error('REQUEST ERROR --> ', error))
    }

    handleSearch (e) {
      if ((e.which || e.keyCode) === 13) {
        e.target.disabled = true
        github
          .get(`/users/${e.target.value}`)
          .then(({ data }) => {
            this.setState({
              userInfo : {
                name: data.name,
                login: data.login,
                public_repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                bio: data.bio,
                avatar_url: data.avatar_url
              }
            })
          })
          .catch(error => console.error('REQUEST ERROR --> ', error))
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
