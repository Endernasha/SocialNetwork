import React from 'react'
import ava_mini from '../../../img/elon_mini.jpg'
function Post(props){
    return(
        <div className='post'>
        <   img src={ava_mini} alt='profile_mini_photo'/>
            <span>Elon Mask</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post