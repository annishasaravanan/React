import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActivate] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setActivate(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <p>Status: {isActive ? "Running" : "Paused"}</p>
    </div>
  );
}

export default Timer;
