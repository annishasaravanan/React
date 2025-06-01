import UserCondition from './condition';

function Demo1() {
  return (
    <>
      <UserCondition isLoggedIn={false} username="john doe" />
    </>
  );
}

export default Demo1;
