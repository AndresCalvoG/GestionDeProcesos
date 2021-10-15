import React from "react";
import "./styles/selectOption.css";

const SelectOption = (props) => {
  return (
    <select id="select" className="selectOption">
      {props.options.map((element) => {
        return <option>{element}</option>;
      })}
    </select>
  );
};

export default SelectOption;
