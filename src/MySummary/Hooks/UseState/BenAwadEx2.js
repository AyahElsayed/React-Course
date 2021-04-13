import React, { useState } from 'react'

function BenAwadEx2() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={(e) => { setEmail(e.target.value) }} 
            />

            <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => { setPassword(e.target.value) }} 
            />
        </div>
    )
}

export default BenAwadEx2
