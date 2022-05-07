'use strict'

import React from 'react'

const UserInfo = ({ userInfo }) => (
    <div className='container'>
     <div className='img-user'>
       <img src={userInfo.avatar_url} />
     </div>

     <div className='user-info'>
       <h1><a href={`https://github.com/${userInfo.login}`}>{userInfo.name}</a></h1>

       <ul className='repos-info'>
         <li> Reposotorys: {userInfo.public_repos}</li>
         <li> Followers: {userInfo.followers}</li>
         <li> Following: {userInfo.following}</li>
       </ul>
        <h3>{userInfo.bio}</h3>
     </div>
   </div>
)

UserInfo.propTypes = {
  userInfo: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    bio: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired,
    public_repos: React.PropTypes.number.isRequired,
    followers: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
  })
}

export default UserInfo