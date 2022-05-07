'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Input the name of user in the GitHub'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
