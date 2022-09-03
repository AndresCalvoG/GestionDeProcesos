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
  const [salary, setSalary] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [holy, setHoly] = useState([false, false]);
  const [dominical, setDominical] = useState([false, false]);
  const [results, setResults] = useState([]);

  let startDateMillis = 0;
  let endDateMillis = 0;

  function calcExtraHour() {
    console.log(
      salary,
      startDate,
      endDate,
      hourStart,
      hourEnd,
      holy,
      dominical
    );
    if (holy[0] === true || dominical[0] === true) {
      console.log("fest");
    } else {
      let hours = hourEnd - hourStart;
      console.log(hours);
    }
  }
  function convertTime(updater, value) {
    updater(value);

    if (value.includes("-")) {
      let arrayDate = value.split("-");
      let d = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2]); // dia 86400000
      console.log(d);
    } else {
      let d = new Date();
      let day = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();
      let time = value.split(":");
      let hour = new Date(year, month, day, time[0], time[1]);
      console.log(hour);
    }
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
            Fecha inicio:
            <Input
              type="date"
              value={startDate}
              action={setStartDate}
              converter={convertTime}
            />
          </label>
          <label>
            Hora de inicio
            <Input
              type="time"
              value={hourStart}
              action={setHourStart}
              converter={convertTime}
            />
          </label>
          <label>
            Fecha fin:
            <Input
              type="date"
              value={endDate}
              action={setEndDate}
              converter={convertTime}
            />
          </label>
          <label>
            Hora de fin
            <Input
              type="time"
              value={hourEnd}
              action={setHourEnd}
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
