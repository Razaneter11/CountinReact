import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let[count,setCout]=useState(0);
  const change =()=>{
    setCout(count+1);
  }
  return (
    <div>
      <h1>hello {name}</h1>
      <button onClick={change}>Razan Eter {count}</button>
    </div>
  );
}

export default App
