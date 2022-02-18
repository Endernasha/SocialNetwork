import React from 'react'
import './message.css'
function Message(){
    return(
        <div className='message'>
            <div className='chat'>
                <p className='name'>Bil</p>
                <p className='pos'>FAKE!!!!</p>
            </div>
            <div className='chat'>
                <p className='name'>Putin</p>
                <p className='pos'>Agree</p>
            </div>
            <div className='chat'>
                <p className='name'>Doneld Trump</p>
                <p className='pos'>Ahhh maybe not?</p>
            </div>
            <div className='posting'>
                <input placeholder='Enter the Message'/>
                <br/>
                <button>Add Massage</button>
            </div>
        </div>
    )
}
export default Message