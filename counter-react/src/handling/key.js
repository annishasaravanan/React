const users = [
  { id: 1, name: "Annisha" },
  { id: 2, name: "Saravanan" }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li> // 👈 key used here
      ))}
    </ul>
  );
}
export default UserList;