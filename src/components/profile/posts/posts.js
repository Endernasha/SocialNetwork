import React from 'react'
import ava_mini from '../../../img/elon_mini.jpg'
import Post from "../post/post"

function Posts(){
    return(
        <div className='posts'>
          <input placeholder='Enter the Post'/>
          <button>Add Post</button>
          <Post message="BATATABATATABATATABATATABATATA"/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          
        </div>
    )
}
export default Posts