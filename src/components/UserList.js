import User from "./User";
import classes from "./UserList.module.css";

// the UserList function receives the array of users as a prop
// the map function will map the variables from each user to a set of attributes which
// are then passed to the User component
function UserList(props) {
  return (
    <ul className={classes.list}>
      {/*Could possibly pass these as a spread of {..user}*/}
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
