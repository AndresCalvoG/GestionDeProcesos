import React from "react";
import "./styles/loader.css";

function Loader(props) {
  return (
    <div className={props.class}>
      <div className="loader"> </div>
    </div>
  );
}

export default Loader;
