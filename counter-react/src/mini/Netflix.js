import React, { useEffect, useState } from "react";

const netflixLogo = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {!showContent ? (
        <div style={styles.intro}>
          <div style={styles.netflixLogo}>
            <div style={{ ...styles.bar, ...styles.left }}></div>
            <div style={{ ...styles.bar, ...styles.middle }}></div>
            <div style={{ ...styles.bar, ...styles.right }}></div>
          </div>
        </div>
      ) : (
        <h1 style={styles.text}>Welcome to Netflix</h1>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  intro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    position: "relative",
  },
  netflixLogo: {
    position: "relative",
    width: "120px",
    height: "200px",
  },
  bar: {
    position: "absolute",
    backgroundColor: "#e50914",
    width: "40px",
    height: "100%",
    top: 0,
    animation: "fadeIn 2s ease-in-out",
  },
  left: {
    left: 0,
  },
  middle: {
    left: "40px",
    transform: "skewX(-20deg)",
    backgroundColor: "#f40612",
    animation: "slideMiddle 2s ease-in-out forwards",
  },
  right: {
    right: 0,
  },
  text: {
    fontSize: "2rem",
  },
};

// Add keyframes dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes slideMiddle {
    0% { height: 0; opacity: 0; }
    100% { height: 100%; opacity: 1; }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }`,
  styleSheet.cssRules.length
);

export default netflixLogo;
