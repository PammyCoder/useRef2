
//to access DOM element directly........
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [myData, setMyData] = useState();

const count = useRef("");

const styleChange= ()=>{
  count.current.style.backgroundColor = "blue";
  count.current.focus();
};

  return (
    <>
    <input  type="text" value={myData} onChange={(e) => setMyData(e.target.value)} ref={count}/>
    <br/>
    <button onClick={styleChange}>submit</button>
    </>
  )
}

export default App
