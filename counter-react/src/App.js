import React, { useState , useEffect} from 'react';
import './App.css';
import Custom from './custom';
import Age from "./age";
import Toggle from "./toggle"
import Typing from "./typingtracker";
import LiveClock from './live';
import Windows from  './windows';
import Name from "./name";
import Demo from "./demo1";
import Emoji from './emoji';
import Timer from './timer';
import Details from './properties/details';
import Demo1 from './conditional-rendering/demo1'
import Quize from"./quize-app/quize.js";
import ReactHandle from './handling/reacthandle.js'
import Prevent from './handling/prevent.js';
import BubblingExample from './handling/bubbling.js';
import StopPropagationExample from './handling/propagation.js';
import Greeting from './handling/inlinecondition.js';
import UserList from './handling/key.js'
import ControleComponent from './control/controlecomponent.js';
import UseRefExample from './control/useref.js';
import ClickCircleGame from './mini/Click the Circle.js';
import SquidGameMovieTask from './mini/squidgame.js';

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
        <ClickCircleGame/>
        <UseRefExample/>
        <UserList/>
        <Greeting/>
        <BubblingExample/>
        <StopPropagationExample/>
        <Prevent/>
        <ReactHandle/>
         <Demo1/>
        <Custom />
        <Age/>
        <Toggle/>
        <Typing/>
        <LiveClock/>
        <Windows/>
        <Name/>
        <Demo/>
        <Emoji/>
        <Timer/>
        <Details/>
        <Quize/>
        <ControleComponent/>
        <SquidGameMovieTask/>
      </div>
    </div>
  );
}

export default App; 