import React, { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}
export default InputExample;