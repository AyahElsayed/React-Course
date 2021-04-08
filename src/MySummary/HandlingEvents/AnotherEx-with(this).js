import React, { Component } from 'react'

    class Video extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                name: ''
             }
            //  this.handelChange = this.handelChange.bind(this)
        }

        handelChange = (event) => {
            this.setState({
                name: event.target.value
            })
            console.log('somthing happend', event.target.value)
        }
        render() { 
            return ( 
                <div>
                    <input value={this.state.name} onChange={this.handelChange}></input>
                    {/* <input value={this.state.name} onChange={this.handelChange.bind(this)}></input> */}
                </div>
             );
        }
    }
    // To deal with "this" keyword issue ==>
        // write the the commented line in the constructor   OR
        // make handelChange arrow function   OR
        // write 'bind(this)' in the event onChange
        
    export default Video;
 
