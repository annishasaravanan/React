import React from 'react';

function ReactHandle(){
    function handleclick(){
        alert("button clicked");
    }

return (
    <div>
        <h1>React handle</h1>
        <button onClick={handleclick}>clikc me </button>
    </div>
);

}

export default ReactHandle;