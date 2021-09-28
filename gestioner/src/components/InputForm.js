import React from "react";
import "./styles/inputForm.css";

const InputForm = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.label}
        autoComplete="on"
        required
        value={props.value}
        onChange={(e) => props.action(e.target.value)}
        className="inputForm"
      />
    </>
  );
};

export default InputForm;
