import User from "./User";

function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          website={"http://" + user.website}
        />
      ))}
    </ul>
  );
}

export default UserList;
