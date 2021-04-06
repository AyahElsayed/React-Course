import React, { Component } from 'react'

export class ClassComp extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>welcom to, {this.props.company}</h3>
                <p>Users</p>
                <ul>
                    {this.props.users.map((user,index) =><li key={index}>{user}</li>)}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default ClassComp
