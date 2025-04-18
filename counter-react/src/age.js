import React, { useState } from 'react';
import './App.css';

function Age () {

    const [age, setAge]= useState(18);

    const ChangeAge =()=>{
         setAge(26);
    }

    return (
        <div className="App">
          <div className="counter-container">
            <h1>Age changer</h1>
            <div className="counter-display">{age}</div>
            <div className="button-container">
              <button onClick={ChangeAge} className="counter-button">click me</button>
            </div>
          </div>
        </div>
      );
}
export default Age;