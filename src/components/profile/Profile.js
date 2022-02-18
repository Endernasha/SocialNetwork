import React from 'react'
import './Profile.css'
import Posts from './posts/posts'
import ava from '../../img/elon.jpg'

function Profile(props){
    return(
      <div className="profile">
        <div className='me'>
          <img src={ava} alt="Profile Photo"/>
          <p className='name'>{props.name}</p>
          <p className='status'>Bilioner</p>
          <p className='city'>New York</p>
        </div>
        <Posts/>
      </div>
    )
  }
export default Profile