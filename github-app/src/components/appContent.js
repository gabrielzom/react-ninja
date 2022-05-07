'use strict'

import React, { PropTypes } from 'react'
import Search from './search.js'
import UserInfo from './userInfo.js'
import Actions from './actions.js'
import Repositorys from './repositorys.js'

const AppContent = ({
  userInfo,
  repositorys,
  starreds,
  handleSearch,
  handleSeeRepos,
  handleSeeStarreds
}) => (
  <div style={{ marginLeft: '20%', marginRight: '20%' }} className='app'>
    <Search handleSearch={handleSearch} />
    { !!userInfo && <UserInfo userInfo={userInfo} /> }
    { !!userInfo && <Actions handleSeeRepos={handleSeeRepos} handleSeeStarreds={handleSeeStarreds} /> }

    { !!repositorys.length &&
    <div className='repos'>
      { !!repositorys.length &&
        <Repositorys
          title='Repositorys of User'
          className='repository'
          repositorys={repositorys}
        />
      }
      { !!starreds.length &&
        <Repositorys
          title='Favorite Repositorys'
          className='starred'
          repositorys={starreds}
        />
      }
    </div>
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repositorys: PropTypes.array.isRequired,
  starreds: PropTypes.array.isRequired
}

export default AppContent
