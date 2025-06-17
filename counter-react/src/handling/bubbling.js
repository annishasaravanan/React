
function BubblingExample() {
  function handleParentClick() {
    alert("Parent Clicked");
  }

  function handleChildClick() {
    alert("Child Clicked");
  }

  return (
    <div onClick={handleParentClick}>
        <h1>bubbling</h1>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}
export default BubblingExample;