import React, { useState, useEffect } from 'react';

function ClickCircleGame() {
  const [score, setScore] = useState(0);
  const [circlePosition, setCirclePosition] = useState({ top: '50%', left: '50%' });
  const [visible, setVisible] = useState(true);

  // Update circle position every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.floor(Math.random() * 80) + 10 + '%';
      const left = Math.floor(Math.random() * 80) + 10 + '%';
      setCirclePosition({ top, left });
      setVisible(true); // show new circle
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const handleClick = () => {
    setScore(score + 1);
    setVisible(false); // hide circle after successful click
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '90vh', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ textAlign: 'center' }}>Score: {score}</h2>
      {visible && (
        <div
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: circlePosition.top,
            left: circlePosition.left,
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'red',
            cursor: 'pointer',
          }}
        ></div>
      )}
    </div>
  );
}

export default ClickCircleGame;
