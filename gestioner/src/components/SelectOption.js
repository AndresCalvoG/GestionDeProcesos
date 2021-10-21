import React from "react";
import "./styles/selectOption.css";

const SelectOption = (props) => {
  return (
    <select
      id="select"
      className="selectOption"
      onChange={(e) => props.action(e.target.value)}
      value={props.value}
    >
      {["", ...props.options].map((element) => {
        return <option key={element}>{element}</option>;
      })}
    </select>
  );
};

export default SelectOption;
