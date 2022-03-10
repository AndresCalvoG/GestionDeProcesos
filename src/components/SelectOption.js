import React from "react";
import "./styles/selectOption.css";

const SelectOption = (props) => {
  return props.obj ? (
    <select
      id="select"
      className="selectOptionObj"
      onChange={(e) => {
        props.action(e.target.value);
        props.actionId(e.target.selectedOptions[0].id);
      }}
      value={props.value}
    >
      <option selected disabled>
        {}
      </option>
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
  ) : props.type === "area" ? (
    <select
      id="select"
      className="selectOption"
      onChange={(e) => {
        props.action(e.target.value);
        props.actionMachines(e.target.selectedOptions[0].id);
      }}
      value={props.value}
    >
      {[{ id: "", name: "" }, ...props.options].map((element) => {
        return (
          <option key={element.id} id={element.id}>
            {element.name}
          </option>
        );
      })}
    </select>
  ) : (
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
