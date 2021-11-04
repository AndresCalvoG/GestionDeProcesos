import React from "react";
import "./styles/selectOption.css";

const SelectOption = (props) => {
  return !props.obj ? (
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
  ) : (
    <select
      id="select"
      className="selectOptionObj"
      onChange={(e) => {
        props.action(e.target.value);
        props.actionId(e.target.selectedOptions[0].id);
      }}
      value={props.value}
    >
      {[
        { values: { anomalia: { stringValue: "" } }, id: "0" },
        ...props.options,
      ].map((element) => {
        return (
          <option key={element.id} id={element.id}>
            {element.values.anomalia.stringValue}
          </option>
        );
      })}
    </select>
  );
};

export default SelectOption;
