import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <Link to={"/details/" + props.id}>
      <button className={classes.button}>More Details</button>
    </Link>
  );
}

export default Button;
