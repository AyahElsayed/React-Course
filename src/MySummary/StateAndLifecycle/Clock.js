import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            number : 0
        }; // the date static and not updated automaticaly until i reresh the page 
        // then i need to setstate using hooks
    }
    componentDidMount() {
        // componentDidMount mean component successfuly is now on the browser and we start doning what we want
        this.timer = setInterval(() => this.tick(), 1000)
        // this.timer == let timer
    }
    componentWillUnmount() {
        // componentWillUnmount mean when component is going to be destoried we want to do these things
        clearInterval(this.timer)
    }
    tick() {
        this.setState({
            date: new Date() ,
            number : this.state.number +1
        }, // after this coma is a calback function
        // if i need to see how something kind of resulted OR what happends after my state is updated
        () => {
            console.log('STATE: ', this.state.date)
        }
        )

        // OR
        // this.state.date = new Date()
        // using this formate inside of the constructor

    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h1>Number: {this.state.number}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock
