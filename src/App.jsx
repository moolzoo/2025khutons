import { useState } from 'react'
import './App.css'
import CardStack from './CardStack';
import potatoImg from './assets/images/potato.png';
import ResultScreen from './ResultScreen';
import Slide from './Slide';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ResultScreen></ResultScreen> */}
      <Slide></Slide>
    </div>
  )
}

export default App
