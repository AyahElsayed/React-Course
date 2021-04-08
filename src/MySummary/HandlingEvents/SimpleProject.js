import React, { useState } from 'react'
import './SimpleProject.css'

function SimpleProject() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showpassword, setShowpassword] = useState(true)
    return (
        <div >
            <input 
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e)=>{
                    console.log(e.target.value)
                    setUsername(e.target.value)
                }}
            />
            <input 
                type={showpassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=>{
                    console.log(e.target.value)
                    setPassword(e.target.value)
                }}
            />
            <h2>{username}</h2>
            <h2>{showpassword ? password : '*'.repeat(password.length)}</h2>
            <button 
            onClick={(e)=>{
                setShowpassword(!showpassword)
            }}
            >Show/Hide password</button>
        </div>
    )
}

export default SimpleProject
