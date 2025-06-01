//nterview Tip

// "In React, conditional rendering lets us show different UI based on state or props. We can use if statements, 
// ternary operators, or logical && depending on how simple or complex the condition is. It's a clean way to make
//  our components dynamic and interactive."

// UserCondition.js
function UserCondition(props) {
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome back ${props.username}`
        : 'Please log in to continue'}
    </h2>
  );
}

export default UserCondition;
