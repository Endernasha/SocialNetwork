import React from 'react'
import './Profile.css'
import ava from '../../img/elon.jpg'
import ava_mini from '../../img/elon_mini.jpg'
function Profile(){
    return(
      <div className="profile">
        <div className='me'>
          <img src={ava} alt="Profile Photo"/>
          <p>Elon Mask</p>
        </div>
        <div className='posts'>
          <input placeholder='Enter the Post'/>
          <button>Add Post</button>
          <div className='post'>
            <img src={ava_mini} alt='profile_mini_photo'/>
            <span>Elon Mask</span>
            <p>TextTextTextTextTextTextText</p>
          </div>
        </div>
      </div>
    )
  }
export default Profile