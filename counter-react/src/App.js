import React, { useState , useEffect} from 'react';
import './App.css';
import Custom from './custom';
import Age from "./age";
import Toggle from "./toggle"
import Typing from "./typingtracker";
import LiveClock from './live';
import Windows from  './windows';

function App() {
  const [count, setCount] = useState(0);  

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        <div className="button-container">
          <button onClick={decrement} className="counter-button">-</button>
          <button onClick={reset} className="counter-button reset">Reset</button>
          <button onClick={increment} className="counter-button">+</button>
        </div>
        <Custom />
        <Age/>
        <Toggle/>
        <Typing/>
        <LiveClock/>
        <Windows/>
        <div className='footer'>
          <p>Made up</p>
        </div>
      </div>
    </div>
  );
}

export default App; 