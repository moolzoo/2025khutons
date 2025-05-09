import { useState } from 'react'
import './App.css'
import CardStack from './CardStack'
import potatoImg from './assets/images/potato.png';
import { Slide } from '.';
import ResultScreen from './ResultScreen';

function ResultScreen() {

  return (
    <div className="App">
      <ResultScreen></ResultScreen>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <ResultScreen></ResultScreen>
    </div>
  )
}

export default App
