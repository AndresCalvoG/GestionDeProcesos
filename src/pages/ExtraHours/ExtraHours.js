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
    millis: 1662838800000,
    dayNumber: 10,
    dayName: "SAB",
    month: "SEP",
    year: 2022,
    hour: 14,
    minute: 40,
    seconds: 0,
  };
  const timeObj2 = {
    text: "",
    millis: 1662868200000,
    dayNumber: 10,
    dayName: "SAB",
    month: "SEP",
    year: 2022,
    hour: 22,
    minute: 50,
    seconds: 0,
  };

  const [salary, setSalary] = useState(0);
  const [startDate, setStartDate] = useState(timeObj);
  const [endDate, setEndDate] = useState(timeObj2);
  const [holy, setHoly] = useState([false, false]);
  const [dominical, setDominical] = useState([false, false]);
  const [results, setResults] = useState([]);

  function calcExtraHour() {
    if (holy[0] === true || dominical[0] === true) {
      console.log("fest");
    } else {
      let hoursMillis = endDate.millis - startDate.millis;
      let totalHours = hoursMillis / 3600000;
      console.log("Horas totales: " + totalHours);

      let ordinaryHours = 0;
      for (let i = 0; i < 15; i++) {
        let hours = startDate.hour + i;
        if (hours >= 6 && hours < 21 && hours < endDate.hour) {
          ordinaryHours++;
        } else {
          break;
        }
      }
      console.log("Horas ordinarias: " + ordinaryHours);

      let nigthHours = -1;
      for (let i = 0; i < 54; i++) {
        let hour = new Date(startDate.millis + 600000 * i).getHours();
        let min = new Date(startDate.millis + 600000 * i).getMinutes();

        if (hour <= 21) {
          console.log(`h: ${hour}, m: ${min}`);
          nigthHours++;
          if (hour === 21 && min === 0) {
            break;
          }
        }
      }
      console.log("Horas Nocturnas: " + (nigthHours * 10) / 60);
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
    console.log(d);
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
    console.log(dateObj);
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
