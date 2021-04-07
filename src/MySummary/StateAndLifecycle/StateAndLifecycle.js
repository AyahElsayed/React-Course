import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Clock from './Clock';

// display the current time and update it automaticaly
// this is not the better way to do it  
function Tick(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

// function displayTime() {
//   ReactDOM.render(<Tick />, document.getElementById('root'));
// }

function displayTime() {
  ReactDOM.render(<Clock />, document.getElementById('root'));
}
setInterval(displayTime, 1000);

export default displayTime



