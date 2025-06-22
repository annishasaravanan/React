import React from "react";
import {useState, useRef} from 'react';

function UseRefExample(){
    const [input, setInput] = useState("");
    const inputRef=useRef();
    console.log("getting render");

    const display =() =>{
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <h1>Input</h1>
            <input 
                type="text"
                ref={inputRef}
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
            />
            <p>my name is {inputRef.current?.value}</p>
            <button onClick={display}>display</button>
        </div>
    );
}
export default UseRefExample;