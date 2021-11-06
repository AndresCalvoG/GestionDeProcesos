import React, { useState, useEffect } from "react";
import "../styles/progress.css";
import logic from "./Logic";

function Progress(props) {
  const [loading, setLoading] = useState(0);
  let timerID;

  useEffect(() => {
    timerID = setInterval(() => {
      setLoading(logic.suma());
      console.log(loading);
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className={props.class} id="load">
      <progress value={loading} max="100" className="load" />
    </div>
  );
}

export default Progress;
