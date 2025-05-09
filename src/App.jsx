import { useState } from 'react'
import './App.css'
import CardStack from './CardStack'
import potatoImg from './assets/images/potato.png';

function ResultScreen() {

  return (
    <div className="result-screen">
      <div style={{ width:"200px",height:"200px",borderRadius:"200px",border:"2px solid black",marginRight:"300px",left:"300px"}}>
        <img src={potatoImg} alt="Potato" style={{ width: "100%", height: "100%", borderRadius: "200px" }} />
      </div>
      <CardStack></CardStack>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <ResultScreen></ResultScreen>
      <p>hi</p>
    </div>
  )
}

export default App
