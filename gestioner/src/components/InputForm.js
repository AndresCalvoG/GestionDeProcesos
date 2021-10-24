import React from "react";
import "./styles/inputForm.css";

const InputForm = (props) => {
  return props.type === "checkbox" ? (
    <input
      type={props.type}
      placeholder={props.label}
      autoComplete="on"
      checked={props.value}
      size={props.size}
      onChange={(e) => {
        props.action(e.target.checked);
        console.log(e.target.checked);
      }}
      className={props.class}
      readOnly={props.readOnly}
    />
  ) : (
    <input
      type={props.type}
      placeholder={props.label}
      autoComplete="on"
      value={props.value}
      size={props.size}
      onChange={(e) => props.action(e.target.value)}
      className={props.class}
      readOnly={props.readOnly}
    />
  );
};

export default InputForm;
