import React from "react";
import "./styles/inputForm.css";

const InputForm = (props) => {
  return props.type === "checkbox" ? (
    <input
      type={props.type}
      checked={props.value}
      size={props.size}
      onChange={(e) => {
        let array = [];
        for (let i = 0; i < props.array; i++) {
          array.push(false);
        }
        array[props.index] = e.target.checked;
        props.action(array);
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
