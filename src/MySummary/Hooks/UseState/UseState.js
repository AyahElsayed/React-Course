import React, { useState } from 'react'

function InputElement() {
    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([])
    return (
        <div>
            <input
                placeholder="Enter some text"
                onChange={(e)=>{
                    setInputText(e.target.value)
                    setHistoryList([...historyList, e.target.value] )
                }}
            />
            <br/>
            {inputText} 
            <br/>
            <hr/>
            <ul>
            {historyList.map((item)=>{
                return <div>{item}</div>
            })}
            </ul>
            
        </div>
    )
}

export default InputElement
