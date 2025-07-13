import React, { useState, useEffect } from 'react';

const jokes = [
  { setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "Why don’t scientists trust atoms?", punchline: "Because they make up everything!" },
  { setup: "Why did the math book look sad?", punchline: "Because it had too many problems." },
];

function DontLaughChallenge() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [laughed, setLaughed] = useState(false);

  useEffect(() => {
    // Pick a random joke
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
    setShowPunchline(false);
    setLaughed(false);

    // Show punchline after 5 seconds
    const timer = setTimeout(() => {
      setShowPunchline(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLaughed = () => {
    setLaughed(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🤣 Don’t Laugh Challenge 🤣</h1>
      {joke && (
        <>
          <h2>{joke.setup}</h2>
          {showPunchline ? <h3>{joke.punchline}</h3> : <p>Wait for it...</p>}
        </>
      )}
      {showPunchline && !laughed && (
        <button onClick={handleLaughed} style={{ marginTop: '20px', padding: '10px 20px' }}>
          I laughed 😂
        </button>
      )}
      {laughed && <h3 style={{ color: 'green' }}>You lost the challenge! 😆</h3>}
    </div>
  );
}

export default DontLaughChallenge;
