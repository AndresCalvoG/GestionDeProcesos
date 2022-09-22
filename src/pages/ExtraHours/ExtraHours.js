import React, { useState } from "react";
import Styled from "styled-components";

import Input from "../../components/InputForm";
import Button from "../../components/Buttons/Button";

const Container = Styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items:center;


  section{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }
`;

const NewHour = Styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  h2{
    padding-bottom: 1rem;
  }
  input{
    margin-bottom:1rem;
  }
  div{
    width:100%;
    display:flex;
    justify-content: space-evenly;
  }
`;

function ExtraHours() {
  const timeObj = {
    text: "",
    millis: 0,
    dayNumber: 0,
    dayName: "",
    month: "",
    year: 0,
    hour: 0,
    minute: 0,
    seconds: 0,
  };

  const [salary, setSalary] = useState(1000000);
  const [startDate, setStartDate] = useState(timeObj);
  const [endDate, setEndDate] = useState(timeObj);
  const [holyStart, setHolyStart] = useState(false);
  const [fiveDays, setFiveDays]= useState(false)
  const [sixDays, setSixDays]= useState(false)
  const [holyEnd, setHolyEnd] = useState(false);
  const [results, setResults] = useState({});

  function calcExtraHour() {
    if (salary === 0 || salary < 1000000) {
      console.log("debe ingresaria mas de 1 millon cop");
    }
    if (startDate.millis === 0 || endDate.millis === 0) {
      console.log("complete all spaces");
      return;
    }

    let hoursMillis = endDate.millis - startDate.millis;
    let totalHours = hoursMillis / 3600000;
    let ordinaryHours = 0;
    let nigthHours = 0;
    let dominicalNigthHours = 0;
    let dominicalOrdinaryHours = 0;
    let holyOrdinaryHours = 0;
    let holyNigthHours = 0;

    let numCycles = hoursMillis / 60000;

    let startDay = new Date(startDate.millis).getDay();

    for (let i = 0; i < numCycles; i++) {
      let hour = new Date(startDate.millis + 60000 * i).getHours();
      let day = new Date(startDate.millis + 60000 * i).getDay();

      if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
        if (day === 0) {
          dominicalNigthHours++;
        } else if (holyStart && day !== 0 && day === startDay ) {
          holyNigthHours++;
        } else if(holyEnd && day !== 0 && day > startDay){
          holyNigthHours++;
        } else {
          nigthHours++;
        }
      }
      if (hour >= 6 && hour < 21) {
        if (day === 0) {
          dominicalOrdinaryHours++;
        } else if (holyStart && day !== 0 && day === startDay) {
          holyOrdinaryHours++;
        } else if(holyEnd && day !== 0 && day > startDay){
          holyOrdinaryHours++;
        } else {
          ordinaryHours++;
        }
      }
    }

    console.log("Horas totales: " + totalHours.toFixed(2));
    console.log("Horas ordinarias: " + (ordinaryHours / 60).toFixed(2));
    console.log("Horas Nocturnas: " + (nigthHours / 60).toFixed(2));
    console.log(
      "H. Diurnas Dominical: " + (dominicalOrdinaryHours / 60).toFixed(2)
    );
    console.log(
      "H. Nocturnas Dominical: " + (dominicalNigthHours / 60).toFixed(2)
    );
    console.log(
      "H. Diurnas Festivas: " + (holyOrdinaryHours / 60).toFixed(2)
    );
    console.log(
      "H. Nocturnas Festivas: " + (holyNigthHours / 60).toFixed(2)
    );
    setResults({
      HT: totalHours.toFixed(2),
      HO:(ordinaryHours / 60).toFixed(2),
      HN:(nigthHours / 60).toFixed(2),
      HDD:(dominicalOrdinaryHours / 60).toFixed(2),
      HND:(dominicalNigthHours / 60).toFixed(2),
      HDF:(holyOrdinaryHours / 60).toFixed(2),
      HFN:(holyNigthHours / 60).toFixed(2)
    })
  }

  function convertTime(updater, value) {
    const days = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
    const months = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ];
    let dateTime = value.split("T");
    let arrayDate = dateTime[0].split("-");
    let arrayTime = dateTime[1].split(":");
    let d = new Date(
      arrayDate[0],
      arrayDate[1] - 1,
      arrayDate[2],
      arrayTime[0],
      arrayTime[1]
    ); // dia 86400000
    // if (startDate.millis > Date.parse(d)) {
    //   console.log("error end date minor to start date");
    //   return;
    // }
    let dateObj = {
      text: value,
      millis: Date.parse(d),
      dayNumber: d.getDate(),
      dayName: days[d.getDay()],
      day: d.getDay(),
      month: months[d.getMonth()],
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      seconds: d.getSeconds(),
    };
    updater(dateObj);
  }

  return (
    <Container>
      <section>
        <h1>Horas Extra</h1>
        <label>
          Salario:
          <Input type="text" value={salary} action={setSalary} />
        </label>
        <NewHour>
          <h2>Nueva horario extra</h2>
          <div>
            <p>lunes a vierne?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={fiveDays}
                onChange={(e) => {
                  setFiveDays(e.target.checked);
                  setSixDays(!e.target.checked)
                }}
              />
            </label>
          </div>
          <div>
            <p>lunes a sabado?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={sixDays}
                onChange={(e) => {
                  setSixDays(e.target.checked);
                  setFiveDays(!e.target.checked)
                }}
              />
            </label>
          </div>
          <label>
            Fecha y hora de iniciado:
            <Input
              type="datetime-local"
              value={startDate.text}
              action={setStartDate}
              converter={convertTime}
            />
          </label>
          <div>
            <p>Es festivo?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={holyStart}
                onChange={(e) => {
                  setHolyStart(e.target.checked);
                }}
              />
            </label>
          </div>
          <label>
            Fecha y hora de finalizado:
            <Input
              type="datetime-local"
              value={endDate.text}
              action={setEndDate}
              converter={convertTime}
            />
          </label>
          <div>
            <p>Es festivo?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={holyEnd}
                onChange={(e) => {
                  setHolyEnd(e.target.checked);
                }}
                disabled={endDate.day===startDate.day?true:false}
              />
            </label>
          </div>
          <Button
            name="Calcular"
            type="basic"
            invertColor={true}
            action={calcExtraHour}
          />
        </NewHour>
      </section>
      <section>
        <article>
          <p>Resultados</p>
          <ul>
            <li>Horas totales: {results.HT}</li>
            <li>Extras Diurnas(125%):  </li>
          </ul>
        </article>
      </section>
    </Container>
  );
}

export default ExtraHours;
