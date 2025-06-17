import React from 'react';

function StopPropagationExample() {
  function handleParentClick() {
    alert("Parent Clicked");
  }

  function handleChildClick(event) {
    event.stopPropagation(); // stops event from reaching parent
    alert("Child Clicked");
  }

  return (
    <div onClick={handleParentClick} style={{ padding: 20, backgroundColor: "#f0f0f0" }}>
      <h3>Parent Div</h3>
      <button onClick={handleChildClick}>
        Click Child Button
      </button>
    </div>
  );
}

export default StopPropagationExample;
