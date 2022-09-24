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
  const [fiveDays, setFiveDays] = useState(false);
  const [sixDays, setSixDays] = useState(false);
  const [holyEnd, setHolyEnd] = useState(false);
  const [results, setResults] = useState({});

  function validation() {
    if (salary === 0 || salary < 1000000) {
      console.log("debe ingresaria mas de 1 millon cop");
      return false;
    } else if (!fiveDays && !sixDays) {
      console.log("seleccione una jornada");
      return false;
    } else if (startDate.millis === 0 || endDate.millis === 0) {
      console.log("complete all spaces");
      return false;
    } else {
      return true;
    }
  }
  function calcExtraHour() {
    if (validation()) {
      let hoursMillis = endDate.millis - startDate.millis;
      let totalHours = (hoursMillis / 3600000).toFixed(2);
      let ordinaryHours = 0;
      let hed = 0;
      let nigthHours = 0;
      let hen = 0;
      let dominicalNigthHours = 0;
      let dominicalOrdinaryHours = 0;
      let holyOrdinaryHours = 0;
      let holyNigthHours = 0;

      let numCycles = hoursMillis / 60000;

      let startDay = new Date(startDate.millis).getDay();

      for (let i = 0; i < numCycles; i++) {
        let hour = new Date(startDate.millis + 60000 * i).getHours();
        let day = new Date(startDate.millis + 60000 * i).getDay();

        if (sixDays) {
          if (day === 0) {
            // domingos
            if (i >= 490) {
              //horas extra
              if (hour >= 6 && hour < 21) {
              }
              if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
              }
            } else {
              //horas ordinarias
              if (hour >= 6 && hour < 21) {
              }
              if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
              }
            }
          } else if (holyStart && day !== 0 && day === startDay) {
            //
          } else {
            // dias normales
            if (i >= 490) {
              //horas extra
              if (hour >= 6 && hour < 21) {
              }
              if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
              }
            } else {
              //horas ordinarias
              if (hour >= 6 && hour < 21) {
              }
              if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
              }
            }
          }
        }

        if (fiveDays) {
          if (i >= 580) {
            // horas extra
            if (hour >= 6 && hour < 21) {
            }
            if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
            }
          } else {
            //horas ordinarias
            if (hour >= 6 && hour < 21) {
            }
            if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
            }
          }
        }

        // if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
        //   if (day === 0) {
        //     dominicalNigthHours++;
        //   } else if (holyStart && day !== 0 && day === startDay) {
        //     holyNigthHours++;
        //   } else if (holyEnd && day !== 0 && day > startDay) {
        //     holyNigthHours++;
        //   } else if (sixDays && i >= 490) {
        //     hen++;
        //   } else if (fiveDays && i >= 580) {
        //     hen++;
        //   } else {
        //     nigthHours++;
        //   }
        // }

        // if (hour >= 6 && hour < 21) {
        //   if (day === 0) {
        //     dominicalOrdinaryHours++;
        //   } else if (holyStart && day !== 0 && day === startDay) {
        //     holyOrdinaryHours++;
        //   } else if (holyEnd && day !== 0 && day > startDay) {
        //     holyOrdinaryHours++;
        //   } else if (sixDays && i >= 490) {
        //     hed++;
        //   } else if (fiveDays && i >= 580) {
        //     hed++;
        //   } else {
        //     ordinaryHours++;
        //   }
        // }
      }

      let values = {
        HT: totalHours,
        HO: (ordinaryHours / 60).toFixed(2),
        HED: (hed / 60).toFixed(2),
        HN: (nigthHours / 60).toFixed(2),
        HEN: (hen / 60).toFixed(2),
        RN: (nigthHours / 60).toFixed(2),
        HDD: (dominicalOrdinaryHours / 60).toFixed(2),
        HND: (dominicalNigthHours / 60).toFixed(2),
        HDF: (holyOrdinaryHours / 60).toFixed(2),
        HNF: (holyNigthHours / 60).toFixed(2),
      };
      setResults(values);
      console.log(values);
    } else {
      return;
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
            <p>jornada de 5 dias?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={fiveDays}
                onChange={(e) => {
                  setFiveDays(e.target.checked);
                  setSixDays(!e.target.checked);
                }}
              />
            </label>
          </div>
          <div>
            <p>jornada de 6 dias?</p>
            <label>
              Si
              <input
                type="checkbox"
                checked={sixDays}
                onChange={(e) => {
                  setSixDays(e.target.checked);
                  setFiveDays(!e.target.checked);
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
                disabled={endDate.day === startDate.day ? true : false}
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
            <li>Horas Ordinarias: {results.HO}</li>
            <li>Extras Diurnas(125%): {results.HED} </li>
            <li>Recargo Nocturno(35%): {results.RN}</li>
            <li>Extras Nocturnas(175%): {results.HEN}</li>
            <li>Extras Festivas(175%): {results.HDF + results.HNF}</li>
            <li>Extras Dominical(175%): {results.HDD + results.HND}</li>
            <li>Recargo Festivo(75%): {results.HNF + results.HND}</li>
          </ul>
        </article>
      </section>
    </Container>
  );
}

export default ExtraHours;
