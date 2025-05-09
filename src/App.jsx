import { useState } from 'react'
import './App.css'
import CardStack from './CardStack'
import potatoImg from './assets/images/potato.png';
import ResultScreen from './ResultScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResultScreen></ResultScreen>
    </div>
  )
}

export default App
