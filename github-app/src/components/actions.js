'use strict'

import React from 'react'

const Actions = ({ handleSeeRepos, handleSeeStarreds }) => (
  <div className='actions'>
    <button onClick={handleSeeRepos}>SEE REPOSITORYS</button>
    <button onClick={handleSeeStarreds}>SEE STARREDS</button>
  </div>
)

export default Actions
