import React, { useEffect, useLayoutEffect } from "react";
import InputForm from "./InputForm";
import { AppContext } from "../context";

function Reloj() {
  let timerID;
  const { getCurrentDate, fecha, hora } = React.useContext(AppContext);

  useEffect(() => {
    timerID = setInterval(() => getCurrentDate(), 1000);
  }, []);

  useLayoutEffect(() => {
    clearInterval(timerID);
  }, []);

  return (
    <>
      <label>
        Fecha:
        <InputForm
          type="text"
          size="7"
          value={fecha}
          readOnly={true}
          class="inputFormOrder"
        />
      </label>
      <label>
        Hora:
        <InputForm
          type="text"
          size="5"
          value={hora}
          readOnly={true}
          class="inputFormOrder"
        />
      </label>
    </>
  );
}

export default Reloj;
