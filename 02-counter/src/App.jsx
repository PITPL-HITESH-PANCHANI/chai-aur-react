
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
const addValue = ()=>{
  setCounter((prev)=>prev+1)
}
const removeValue = ()=>{
  if(counter > 0) setCounter((prev)=>prev-1)
}
  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter Value : {counter}</h2>

       <button onClick={addValue}>Add value</button>
       <br/>
       <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
