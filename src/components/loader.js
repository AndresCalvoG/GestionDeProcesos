import React from "react";
import { AppContext } from "../context";
import "./styles/loader.css";

function Loader() {
  const { loading } = React.useContext(AppContext);

  return (
    <>
      {loading ? (
        <div className="showLoader">
          <div className="loader"> </div>
        </div>
      ) : (
        <div className="hidenLoader">
          <div className="loader"> </div>
        </div>
      )}
    </>
  );
}

export default Loader;
