'use strict'

import React from 'react'

const Repositorys = ({ title, className, repositorys }) => (
    <div className={ className }>
    <h2>{title}: </h2>
      <ul>
        {repositorys.map((repository, index) => (
          <div key={index}>
            <li><a href={repository.html_url}>{repository.name}</a></li>
            <li>ID: {repository.id}</li>
            <li>Language: {repository.language}</li>
            <li>Description: {repository.description}</li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
)

Repositorys.defaultPros = {
    className: '',
}

Repositorys.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    repositorys: React.PropTypes.array.isRequired
}

export default Repositorys