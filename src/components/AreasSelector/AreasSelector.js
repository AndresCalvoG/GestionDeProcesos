import React, { useState } from "react";
import { AppContext } from "../../context";
import SelectOption from "../SelectOption";
import "./areasSelector.css";

function AreasSelector() {
  const { updateMachinesArea, areas } = React.useContext(AppContext);
  const [area, setArea] = useState("");

  return (
    <label className="areasSelector-main">
      <h1 className="areasSelector-title">Area:</h1>
      <SelectOption
        options={areas}
        value={area}
        action={setArea}
        actionMachines={(e) => {
          updateMachinesArea(e);
        }}
        type="area"
      />
    </label>
  );
}

export default AreasSelector;
