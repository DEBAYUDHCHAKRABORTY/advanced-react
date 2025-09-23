import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from './compo/comp2'

import Multi from './compo/com3'
import './App.css'

import Greet from './compo/com1'
import Count from './compo/comp4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Greet/>
     <Multi/>
     <Add/>
     <Count/>
    </>
  )
}

export default App