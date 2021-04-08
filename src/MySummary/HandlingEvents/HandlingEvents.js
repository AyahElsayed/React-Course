import React from 'react'
import Video from './AnotherEx-with(this)'

// in HTML =>
// <button onclick="activateLasers()">
//   Activate Lasers
//   </button>

function HandlingEvents() {
    function handelClick(e) {
        console.log(e)
    }

    // in HTML =>
    // to doesn't make the page refresh when click
    // <a href="#" onclick="console.log('The link was clicked.'); return false">
    //   Click me
    //   </a>

    function stopDefault(e) {
        e.preventDefault()
        console.log('clicked and tyring to reach youtube')
    }
    return (
        <div>
            <button onClick={handelClick}>
                Activate Lasers
            </button>
            <a href='http://youtube.com' onClick={stopDefault}>youtube</a>
            <Video />
        </div>
    )
}

export default HandlingEvents
