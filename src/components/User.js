import Card from "../ui/Card";
import Button from "./Button";
import classes from "./User.module.css";
import { getRandomColor, createImageFromInitials } from "./Utils";

function User(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          {/* Creates an image for the user based on their name using a set of utility functions found online*/}
          <img
            className={classes.userpic}
            id="intials"
            src={createImageFromInitials(100, props.name, getRandomColor())}
            alt="profile-pic"
          />
          <h3 className={classes.name}>{props.name}</h3>
          <p className={classes.username}>@{props.username}</p>
          <p className={classes.website}>
            <a href={props.website}>{props.website}</a>
          </p>
        </div>
        {/* Passing the ID of the user to the button so it knows where to redirect
        the user on press*/}
        <div className={classes.button}>
          <Button id={props.id} />
        </div>
        <br></br>
      </Card>
    </li>
  );
}

export default User;
