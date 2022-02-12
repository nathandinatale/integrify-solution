import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Button(props) {
  return (
    <div>
      <Link to={"/details/" + props.id}>
        <button className={classes.button}>{props.id}</button>
      </Link>
    </div>
  );
}

export default Button;
