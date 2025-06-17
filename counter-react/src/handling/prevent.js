import React, { useState } from 'react';

function Prevent() {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`hello, ${name}`); 
    }

    return (
        <div>
         <h1>PREVENT DEFAULT</h1>
        <form onSubmit={handleSubmit}> 
            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default Prevent;
