import { useState } from 'react'
import './App.css'
import CardStack from './CardStack'
import potatoImg from './assets/images/potato.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{ width:"200px",height:"200px",borderRadius:"200px",border:"2px solid black",marginRight:"400px"}}>
        <img src={potatoImg} alt="Potato" style={{ width: "100%", height: "100%", borderRadius: "200px" }} />
      </div>
      <CardStack></CardStack>
    </div>
  )
}

export default App
