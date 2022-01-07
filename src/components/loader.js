import React from "react";
import "./styles/loader.css";

function Loader(props) {
  return (
    <div className={props.class}>
      <div className="content-loader">
        <div className="loader"> </div>
      </div>
    </div>
  );
}

export default Loader;
