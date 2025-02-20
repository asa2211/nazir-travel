import React from 'react'
import Infoblock from '../components/infoblock'
import Search from './search'
import About from './about'
import Comment from './comments'
function home() {
  return (
    <div className='home'>
      <div className="container">
        <Search/>
        <Infoblock/>
        <About/>
        <Comment/>
      </div>
    </div>
  )
}

export default home
