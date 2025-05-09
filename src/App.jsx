import { useState } from 'react'
import './App.css'
import CardStack from './CardStack';
import potatoImg from './assets/images/potato.png';
import ResultScreen from './ResultScreen';
import Slide from './Slide';

function ResultScreen() {

  return (
    <div className="App">
      {/* <ResultScreen></ResultScreen> */}
      <Slide></Slide>
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
