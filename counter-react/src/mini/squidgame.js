
import React from "react";
import { useState,useEffect } from "react";


const players=[
  "Player 001 (Oh Il-nam)",
  "Player 067 (Kang Sae-byeok)",
  "Player 456 (Seong Gi-hun)",
  "Player 218 (Cho Sang-woo)",
  "Player 101 (Jang Deok-su)"
];

function SquidGameMovieTask() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [fate, setFate] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult) {
      const timeout = setTimeout(() => {
        const random = Math.random() < 0.5 ? "❌ Eliminated" : "✅ Survived";
        setFate(random);
      }, 1500); // suspense delay

      return () => clearTimeout(timeout);
    }
  }, [showResult]);

  const handleReveal = () => {
    if (currentPlayer < players.length) {
      setFate("");
      setShowResult(true);
    }
  };

  const handleNext = () => {
    setShowResult(false);
    setCurrentPlayer(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>🦑 Squid Game Fate Reveal</h1>
      {currentPlayer < players.length ? (
        <>
          <h2>{players[currentPlayer]}</h2>
          {showResult ? (
            <h2 style={{ color: fate.includes("Survived") ? "green" : "red" }}>
              {fate || "Revealing fate..."}
            </h2>
          ) : (
            <button
              onClick={handleReveal}
              style={{ padding: "10px 20px", fontSize: "18px" }}
            >
              Reveal Fate
            </button>
          )}
          {fate && (
            <button
              onClick={handleNext}
              style={{ marginTop: "20px", padding: "8px 16px" }}
            >
              Next Player
            </button>
          )}
        </>
      ) : (
        <h2>Game Over! All player fates revealed.</h2>
      )}
    </div>
  );
}

export default SquidGameMovieTask;