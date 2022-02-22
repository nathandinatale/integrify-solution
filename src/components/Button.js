import { Link } from "react-router-dom";
import classes from "./Button.module.css";

// Is displayed within a User component, receiving the user ID as a prop
// links to a new page within the app, appending the userID to the URL

// the React router in App.js knows to which page to render for the user at the specified URL
function Button(props) {
  return (
    <Link to={"/details/" + props.id}>
      <button className={classes.button}>More Details</button>
    </Link>
  );
}

export default Button;
