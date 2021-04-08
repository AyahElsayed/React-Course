// componentWillMount() 
// immediately befor initial rendering

//componentDidMount()
// immediately after initial rendering

//componentWillReceiveProps()
// when component recive new props

//shouldComponentUpdate()
// befor rendering, after reciving new props or state
// (return false to prevent rendering)

//componentWillUpdate()
// befor rendering, after reciving new props or state

//componentDidUpdate()
// after component's updates are flushed to DOM 

// componentWillUnmount()
// immediately befor removing component from DOM

// =================================

// Order of Execution
    // 1- construvtor
    // 2- component Will mount
    // 3- component Did mount
    // *- component Will Receive Props => when changing something
    // 4- should Component Update
    // 5- component Will Update
    // 6- component Did Update