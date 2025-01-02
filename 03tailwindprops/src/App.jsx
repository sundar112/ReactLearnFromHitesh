import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "sundar",
    age : 27
  }
  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-5 mb-5'>Tailwind CSS</h1>
      <Card userName = "allinone" btnText = "visit chanal"/>
      <Card userName = "chanux" btnText = "click me"/>
      <Card userName = "jay" btnText = "subscribe"/>
    </>
  )
}

export default App
