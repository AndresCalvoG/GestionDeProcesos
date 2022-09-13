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

  const [salary, setSalary] = useState(0);
  const [startDate, setStartDate] = useState(timeObj);
  const [endDate, setEndDate] = useState(timeObj);
  const [holy, setHoly] = useState([false, false]);
  const [dominical, setDominical] = useState([false, false]);
  const [results, setResults] = useState([]);

  function calcExtraHour() {
    if (salary === 0 || salary < 1000000) {
      console.log("debe ingresaria mas de 1 millon cop");
    }
    if (startDate.millis === 0 || endDate.millis === 0) {
      console.log("complete all spaces");
      return;
    }
    if (holy[0] === false && holy[1] === false) {
      console.log("select if is holy");
      return;
    }
    if (dominical[0] === false && dominical[1] === false) {
      console.log("select if is dominical");
      return;
    }

    if (holy[0] === true || dominical[0] === true) {
      console.log("fest");
    } else {
      let hoursMillis = endDate.millis - startDate.millis;
      let totalHours = hoursMillis / 3600000;
      let ordinaryHours = 0;
      let nigthHours = 0;

      let numCycles = hoursMillis / 60000;

      for (let i = 0; i < numCycles; i++) {
        let hour = new Date(startDate.millis + 60000 * i).getHours();

        if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
          nigthHours++;
        }
        if (hour >= 6 && hour < 21) {
          ordinaryHours++;
        }
      }

      console.log("Horas totales: " + totalHours.toFixed(2));
      console.log("Horas ordinarias: " + (ordinaryHours / 60).toFixed(2));
      console.log("Horas Nocturnas: " + (nigthHours / 60).toFixed(2));
    }
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
    if (startDate.millis > Date.parse(d)) {
      console.log("error end date minor to start date");
      return;
    }
    let dateObj = {
      text: value,
      millis: Date.parse(d),
      dayNumber: d.getDate(),
      dayName: days[d.getDay()],
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
          <label>
            Fecha y hora de iniciado:
            <Input
              type="datetime-local"
              value={startDate.text}
              action={setStartDate}
              converter={convertTime}
            />
          </label>
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
              <Input
                type="checkbox"
                value={holy[0]}
                action={setHoly}
                index={0}
                array={holy.length}
              />
            </label>
            <label>
              No
              <Input
                type="checkbox"
                value={holy[1]}
                action={setHoly}
                index={1}
                array={holy.length}
              />
            </label>
          </div>
          <div>
            <p>Es Domingo?</p>
            <label>
              Si
              <Input
                type="checkbox"
                value={dominical[0]}
                action={setDominical}
                index={0}
                array={dominical.length}
              />
            </label>
            <label>
              No
              <Input
                type="checkbox"
                value={dominical[1]}
                action={setDominical}
                index={1}
                array={dominical.length}
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
          <ul>
            <li>Results</li>
          </ul>
        </article>
      </section>
    </Container>
  );
}

export default ExtraHours;
