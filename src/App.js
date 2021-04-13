import './App.css'
import ClassComp from './MySummary/ClassComp'
import ConditionalRenderingEx1 from './MySummary/ConditionalRendering/ConditionalRenderingEx1'
import ConditionalRenderingEx2 from './MySummary/ConditionalRendering/ConditionalRenderingEx2'
import PreventComponent from './MySummary/ConditionalRendering/PreventingComponent'
import FuncComp from './MySummary/FuncComp'
import HandlingEvents from './MySummary/HandlingEvents/HandlingEvents'
// import SimpleProject from './MySummary/HandlingEvents/SimpleProject'
import InputElement from './MySummary/Hooks/UseState'
import ImageChangeOnMouseHover from './MySummary/Hooks/UseRef/ImageChangeOnMouseHover'
import ListsAndKeys from './MySummary/ListsAndKeys'
import InputFocus from './MySummary/Hooks/UseRef/SimpleEx'
import ImageChangeOnScroll from './MySummary/Hooks/UseEffect/ImageChangeOnScroll'
// import Clock from './MySummary/StateAndLifecycle/Clock.js'
// import displayTime from './MySummary/StateAndLifecycle/StateAndLifecycle'
function App() {
  const users = ["A", "B", "C"]
  return (
    <div className="App">
      {/* <FuncComp  name={users[0]} /> */}
      {/* <FuncComp  name={users[1]} /> */}
      {/* <ClassComp company="Googel" users={users} /> */}
      {/* <ClassComp company="Googel" users={users}>
        <p>this is a paragraph! and not appear until i pass it as a children in the component</p>
      </ClassComp> */}
      {/* ===================================== */}
      {/* <Clock date={new Date()} /> */}
      {/* <HandlingEvents /> */}
      {/* <SimpleProject/> */}
      {/* <ConditionalRenderingEx1  isLoggedIn={true}/> */}
      {/* <ConditionalRenderingEx2/>
      <PreventComponent />
      <ListsAndKeys /> */}
      {/* <InputElement /> */}
      {/* <ImageChangeOnMouseHover /> */}
      {/* <InputFocus /> */}
      <ImageChangeOnScroll />
    </div>
  );
}

export default App;
