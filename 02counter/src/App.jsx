import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () =>{
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log(counter);
  }
  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1);
    }
    
  }
  
  return (
    <>
     <h1>Chai our React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     &nbsp;&nbsp;&nbsp;
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
