import React from "react";
import "./button.css";

function Button(props) {
  return (
    <button className={props.class} onClick={props.action}>
      {props.name}
    </button>
  );
}

export default Button;
