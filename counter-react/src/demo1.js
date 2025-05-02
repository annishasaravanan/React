import {useState } from "react";

function ThemeToggle() {
    const [dark, setDark] = useState(false);
  
    const toggleTheme = () => setDark(!dark);
  
    return (
      <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000", padding: "1rem" }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
  
  export default ThemeToggle;