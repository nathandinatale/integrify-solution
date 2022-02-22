import Card from "../ui/Card";
import classes from "./Userdetails.module.css";

function UserDetails(props) {
  // Could maybe do some spread operation here ?
  // props contains each value independent, no more address distinction
  return (
    <Card>
      <ul className={classes.details}>
        <li>name: {props.name}</li>
        <li>username: {props.username}</li>
        <li>email: {props.email}</li>
        <li>phone: {props.phone}</li>
        <li>website: {props.website}</li>
        <li>
          address:
          <ul>
            <li>street: {props.street}</li>
            <li>suite: {props.suite}</li>
            <li>city: {props.city}</li>
            <li>zipcode: {props.zipcode}</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
}

export default UserDetails;
