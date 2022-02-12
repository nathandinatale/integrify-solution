import User from "./User";
import classes from "./UserList.module.css";

function UserList(props) {
  return (
    <ul className={classes.list}>
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
