import Card from "../ui/Card";
import Button from "./Button";

function User(props) {
  return (
    <li>
      <Card>
        <div>Name:{props.name}</div>
        <div>Username:{props.username}</div>
        <div>
          <a href={props.website}>{props.website}</a>
        </div>
        {/* Passing the ID of the user to the button so it knows where to redirect
        the user on press*/}
        <Button id={props.id} />
      </Card>
    </li>
  );
}

export default User;
