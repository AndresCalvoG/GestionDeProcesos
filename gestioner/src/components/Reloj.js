import React, { useState, useEffect, useLayoutEffect } from "react";
import InputForm from "./InputForm";

function Reloj() {
  let timerID;
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    timerID = setInterval(() => getCurrentDate(), 1000);
  }, []);

  useLayoutEffect(() => {
    clearInterval(timerID);
  }, []);

  function getCurrentDate() {
    let date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var fullHour = `${hour}:${min}:${sec}`;
    var fullDate = `${dd}/${mm}/${yyyy}`;
    setFecha(fullDate);
    setHora(fullHour);
  }

  return (
    <>
      <InputForm
        type="text"
        size="7"
        value={fecha}
        readOnly={true}
        class="inputFormOrder"
      />
      <InputForm
        type="text"
        size="5"
        value={hora}
        readOnly={true}
        class="inputFormOrder"
      />
    </>
  );
}

export default Reloj;
