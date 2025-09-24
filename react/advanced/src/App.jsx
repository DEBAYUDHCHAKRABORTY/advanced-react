import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './component'
import Comp2 from './Comp2'
import Count from './counter'
import Count2 from './counter2'
import Greeting from './Components/Forms'
import Number from './Components/Numbers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp/>
      <Comp2/>
      <Count/>
      <Count2/>
      <Greeting/>
      <Number/>

      
    </>
  )
}

export default App
