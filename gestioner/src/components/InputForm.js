import React from "react";
import "./styles/inputForm.css";

const InputForm = (props) => {
  return (
    <>
      {props.readOnly ? (
        <input
          type={props.type}
          placeholder={props.label}
          autoComplete="on"
          value={props.value}
          size={props.size}
          onChange={(e) => props.action(e.target.value)}
          className={props.class}
          readOnly
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
        />
      )}
    </>
  );
};

export default InputForm;
