import React, { useState, useEffect } from "react";

const Typingtracker = () => {
  const [isTyping, setIsTyping] = useState("");

  useEffect(() => {
    console.log("Typing:",isTyping);
    console.log("charactertype:",isTyping.length);
  }, [isTyping]);

  const handlechange = (e) => {
    setIsTyping(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Typing Tracker</h1>
    <input
      type="text"
      value={isTyping}
      onChange={handlechange}
      placeholder="Type something..."
      style={{ padding: "10px", width: "300px" }}
    />
    <p>You typed {isTyping.length} characters</p>
  </div>
  );
};

export default Typingtracker;
