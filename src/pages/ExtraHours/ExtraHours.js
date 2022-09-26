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

      let ht = (hoursMillis / 3600000).toFixed(2);
      let hod = 0;
      let hon = 0;
      let hed = 0;
      let hen = 0;
      let hodd = 0;
      let hodn = 0;
      let hedd = 0;
      let hedn = 0;
      let hofd = 0;
      let hofn = 0;
      let hefd = 0;
      let hefn = 0;

      let numCycles = hoursMillis / 60000;
      let startDay = new Date(startDate.millis).getDay();

      function addHourToSchedule(hour, hd, hn) {
        //horario diurno
        if (hour >= 6 && hour < 21) {
          hd++;
        }
        //horario nocturno
        if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
          hn++;
        }
        return { hd, hn };
      }

      for (let i = 0; i < numCycles; i++) {
        let hour = new Date(startDate.millis + 60000 * i).getHours();
        let day = new Date(startDate.millis + 60000 * i).getDay();

        //jornada 6 dias
        if (sixDays) {
          // domingos
          if (day === 0) {
            //horas extra
            if (i >= 490) {
              let value = addHourToSchedule(hour, hedd, hedn);
              hedd = value.hd;
              hedn = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hodd, hodn);
              hodd = value.hd;
              hodn = value.hn;
            }
          } //festivo
          else if (
            (holyStart && day !== 0 && day === startDay) ||
            (holyEnd && day !== 0 && day > startDay)
          ) {
            //horas extra
            if (i >= 490) {
              let value = addHourToSchedule(hour, hefd, hefn);
              hefd = value.hd;
              hefn = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hofd, hofn);
              hofd = value.hd;
              hofn = value.hn;
            }
          } //dias normales
          else {
            //horas extra
            if (i >= 490) {
              let value = addHourToSchedule(hour, hed, hen);
              hed = value.hd;
              hen = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hod, hon);
              hod = value.hd;
              hon = value.hn;
            }
          }
        }

        //jornada 5 dias
        if (fiveDays) {
          // domingos
          if (day === 0) {
            //horas extra
            if (i >= 490) {
              let value = addHourToSchedule(hour, hedd, hedn);
              hedd = value.hd;
              hedn = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hodd, hodn);
              hodd = value.hd;
              hodn = value.hn;
            }
          } //sabados
          else if (day === 6 && !holyStart && !holyEnd) {
            let value = addHourToSchedule(hour, hed, hen);
            hed = value.hd;
            hen = value.hn;
          } //festivo
          else if (
            (holyStart && day !== 0 && day === startDay) ||
            (holyEnd && day !== 0 && day > startDay)
          ) {
            //horas extra
            if (i >= 490) {
              let value = addHourToSchedule(hour, hefd, hefn);
              hefd = value.hd;
              hefn = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hofd, hofn);
              hofd = value.hd;
              hofn = value.hn;
            }
          } //dias normales
          else {
            //horas extra
            if (i >= 580) {
              let value = addHourToSchedule(hour, hed, hen);
              hed = value.hd;
              hen = value.hn;
            } //horas ordinarias
            else {
              let value = addHourToSchedule(hour, hod, hon);
              hod = value.hd;
              hon = value.hn;
            }
          }
        }

        // if ((hour >= 0 && hour < 6) || (hour >= 21 && hour < 24)) {
        //   if (day === 0) {
        //     hodn++;
        //   } else if (holyStart && day !== 0 && day === startDay) {
        //     hofn++;
        //   } else if (holyEnd && day !== 0 && day > startDay) {
        //     hofn++;
        //   } else if (sixDays && i >= 490) {
        //     hen++;
        //   } else if (fiveDays && i >= 580) {
        //     hen++;
        //   } else {
        //     hon++;
        //   }
        // }

        // if (hour >= 6 && hour < 21) {
        //   if (day === 0) {
        //     hodd++;
        //   } else if (holyStart && day !== 0 && day === startDay) {
        //     hofd++;
        //   } else if (holyEnd && day !== 0 && day > startDay) {
        //     hofd++;
        //   } else if (sixDays && i >= 490) {
        //     hed++;
        //   } else if (fiveDays && i >= 580) {
        //     hed++;
        //   } else {
        //     hod++;
        //   }
        // }
      }

      let values = {
        HT: ht,
        HOD: (hod / 60).toFixed(2),
        HON: (hon / 60).toFixed(2),
        HED: (hed / 60).toFixed(2),
        HEN: (hen / 60).toFixed(2),
        HODD: (hodd / 60).toFixed(2),
        HODN: (hodn / 60).toFixed(2),
        HEDD: (hedd / 60).toFixed(2),
        HEDN: (hedn / 60).toFixed(2),
        HOFD: (hofd / 60).toFixed(2),
        HOFN: (hofn / 60).toFixed(2),
        HEFD: (hefd / 60).toFixed(2),
        HEFN: (hefn / 60).toFixed(2),
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
            {/* horas ordinarias */}
            <li>Horas Ordinarias(100%): {results.HOD}</li>
            <li>Horas Nocturno(135%): {results.HON}</li>
            <li>Horas Extras Diurnas(125%): {results.HED} </li>
            <li>Horas Extras Nocturnas(175%): {results.HEN}</li>
            <li></li>
            {/* horas dominicales */}
            <li>Horas Dominical Diurna(175%):{results.HODD}</li>
            <li>Horas Dominical Nocturna(210%): {results.HODN}</li>
            <li>Horas Extra Dominical Diurna(200%):{results.HEDD}</li>
            <li>Horas Extra Dominical Nocturna(250%):{results.HEDN}</li>
            <li></li>
            {/* horas festivas */}
            <li>Horas Festivas Diurna(175%):{results.HOFD}</li>
            <li>Horas Festivas Nocturna(210%): {results.HOFN}</li>
            <li>Horas Extra Festivas Diurna(200%):{results.HEFD}</li>
            <li>Horas Extra Festivas Nocturna(250%):{results.HEFN}</li>
          </ul>
        </article>
      </section>
    </Container>
  );
}

export default ExtraHours;
