import React, { useEffect, useRef } from 'react'

function InputFocus() {
    const inputRef = useRef(null) // first step to use 'useRef'
    useEffect(() => {
        // focuse the input element
        console.log(inputRef.current)  // input (I can access to all properties from here)
        inputRef.current.focus()  // name.current ==> built in function in useRef

        return() =>{
            // clean up function == componentWillUnmount
        }
    }, []) // the second argument '[]' => if empty arry then run effects only once
    return (
        <div>
            <input type="text" ref={inputRef} />  {/* second step using 'ref={name} */}
        </div>
    )
}

export default InputFocus
