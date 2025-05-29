import React, { useState } from 'react';
import './App.css';

function Custom() {
  const [name, setName] = useState("hello");

const ChangeName =()=>{
    setName("i am bad");
}

return (
    <div className="App">
      <div className="counter-container">
        <h1>Name changer</h1>
        <div className="counter-display">{name}</div>
        <div className="button-container">
          <button onClick={ChangeName} className="counter-button">click me</button>
        </div>
      </div>
    </div>
  );
}

export default Custom; 