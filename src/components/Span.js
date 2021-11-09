import React from "react";
import "./styles/span.css";

function Span(props) {
  return <span className={props.class}>{props.text}</span>;
}

export default Span;
