import React, { useState } from 'react';

function MoodSelector() {
  const [mood, setMood] = useState('');

  const moods = {
    '😊': 'Happy',
    '😢': 'Sad',
    '😡': 'Angry',
    '😴': 'Sleepy',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Select Your Mood</h2>
      {Object.keys(moods).map((emoji) => (//emoji is an object 
        <button
          key={emoji}
          onClick={() => setMood(emoji)}
          style={{ fontSize: '2rem', margin: '10px' }}
        >
          {emoji}
        </button>
      ))}
      <div style={{ marginTop: '20px' }}>
        {mood ? (
          <h3>You're feeling {moods[mood]} {mood}</h3>
        ) : (
          <h3>No mood selected</h3> //Conditionally renders message based on mood
        )}	
        <button onClick={() => setMood('')}>Clear Mood</button>
      </div>
    </div>
  );
}

export default MoodSelector;
