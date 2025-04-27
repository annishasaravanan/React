import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => { 

    const timer = setInterval(() => {                       
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');// padStart() adds characters at the beginning until it's long enough.
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Live Clock</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
}

export default LiveClock;


// //"Placing a component into the DOM for the first time."

// It happens when:

// A component appears on the screen.

// React creates the HTML for the component and inserts it into the web pag



//This tells React: "Run this code only once after the component mounts."//)


/*Start a timer that runs every 1000 ms (1 second).
Every second, it updates the time state with new Date().*/


//When the component unmounts, stop (clear) the interval timer.
// Why? → To prevent memory leaks and errors.



// Line	What Happens
// const hours = String(date.getHours()).padStart(2, '0');	Gets the hour from date.
// Converts it to a string.
// If it's only 1 digit (e.g., 7), adds a 0 in front → becomes "07".
// const minutes = String(date.getMinutes()).padStart(2, '0');	Same for minutes.
// If it's "5", it becomes "05".
// const seconds = String(date.getSeconds()).padStart(2, '0');	Same for seconds.
// If it's "9", it becomes "09".
// return \${hours}:${minutes}:${seconds}`;`	Joins hours, minutes, and seconds with colons : and returns it.
// Example output → "08:05:09"