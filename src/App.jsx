import { useState } from 'react'
import './App.css'
import CardStack from './CardStack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width:"100px",height:"100px",borderRadius:"200px",border:"2px solid black"}}></div>
      <CardStack  />
    </>
  )
}

export default App
