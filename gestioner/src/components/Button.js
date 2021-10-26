import React from "react";
import "./styles/button.css";

function Button(props) {
  return (
    <button className={props.class} onClick={props.action}>
      {props.name}
    </button>
  );
}

export default Button;
