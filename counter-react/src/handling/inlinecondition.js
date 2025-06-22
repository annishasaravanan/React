function Greeting({ isLoggedIn }) {
  return (
    <div>
      <h1>Inline Conditional Example</h1>
      {isLoggedIn ? <p>Hello, User!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Greeting;