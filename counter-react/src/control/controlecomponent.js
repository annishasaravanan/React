import React from 'react';
import { useState} from "react";

function ControleComponent() {
  const [email, setEmail] = useState("");//useState is used to create state variables, which makes the component "controlled" — because we will store and manage input values inside React state.

  function handleEmailChange(event)
  {
    setEmail(event.target.value);
  }
function handleSubmit(event)
{
    event.preventDefault();
    alert("Email submitted: "+email);
}
  return (
    <div>
      <h1>Controlecomponent EMAIL</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControleComponent;