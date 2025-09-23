import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './component'
import Comp2 from './Comp2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp/>
      <Comp2/>
    </>
  )
}

export default App
