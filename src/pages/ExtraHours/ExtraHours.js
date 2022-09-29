import React, { useState } from "react";
import Styled from "styled-components";

import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox.js";
import DateTimeInput from "../../components/DateTimeInput/DateTimeInput";
import Button from "../../components/Buttons/Button";

import Add from "../../images/utils/plus.png";

const Container = Styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items:center;
  font-size: 1.6rem;

  img{
    width: 5rem;
    height: 5rem;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 30;
  }
`;
const Modal = Styled.section`
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    right: 0;
    display: ${(props) => (props.visible ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background: rgba(32, 35, 41, 0.95);
    z-index: 20;

    article{
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1rem;
      border-radius: 25px;
      background: white;

      h1,div{
        margin-bottom: 1rem;
      }
      button{
        margin-bottom: 2rem;
      }
    }
    
`;

function ExtraHours() {
  const ORDINARY_TIME1 = 490;
  const ORDINARY_TIME2 = 580;
  const REST_TIME = 40;
  const MIN_SALARY = 1000000;
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
    error: false,
    message: "",
  };
  const defaultState = { text: "", error: false, message: "" };
  const boolState = { value: false, error: false };

  const [salary, setSalary] = useState(defaultState);
  const [startDate, setStartDate] = useState(timeObj);
  const [endDate, setEndDate] = useState(timeObj);
  const [holyStart, setHolyStart] = useState(boolState);
  const [fiveDays, setFiveDays] = useState(boolState);
  const [sixDays, setSixDays] = useState(boolState);
  const [holyEnd, setHolyEnd] = useState(boolState);
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState({});

  function validation() {
    if (salary.text < MIN_SALARY) {
      setSalary({
        ...salary,
        error: true,
        message: "Debe ingresar minimo 1 millon cop",
      });
      return false;
    } else if (!fiveDays.value && !sixDays.value) {
      setFiveDays({ ...fiveDays, error: true });
      setSixDays({ ...sixDays, error: true });
      return false;
    } else if (fiveDays.value && sixDays.value) {
      setFiveDays({ ...fiveDays, error: true });
      setSixDays({ ...sixDays, error: true });
      return false;
    } else if (startDate.millis === 0) {
      setStartDate({
        ...startDate,
        error: true,
        message: "Ingrese feche de inicio",
      });
      return false;
    } else if (endDate.millis === 0) {
      setEndDate({ ...endDate, error: true, message: "Ingrese fecha de fin" });
      return false;
    } else if (endDate.millis < startDate.millis) {
      setEndDate({
        ...endDate,
        error: true,
        message: "Fecha de fin debe ser mayor a la de inicio",
      });
      return false;
    } else if (
      (fiveDays.value && !sixDays.value) ||
      (!fiveDays.value && sixDays.value)
    ) {
      setFiveDays({ ...fiveDays, error: false });
      setSixDays({ ...sixDays, error: false });
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
        if (sixDays.value) {
          // domingos
          if (day === 0) {
            //horas extra
            if (i >= ORDINARY_TIME1) {
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
            (holyStart.value && day !== 0 && day === startDay) ||
            (holyEnd.value && day !== 0 && day > startDay)
          ) {
            //horas extra
            if (i >= ORDINARY_TIME1) {
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
            if (i >= ORDINARY_TIME1) {
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
        if (fiveDays.value) {
          // domingos
          if (day === 0) {
            //horas extra
            if (i >= ORDINARY_TIME1) {
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
          else if (day === 6 && !holyStart.value && !holyEnd.value) {
            let value = addHourToSchedule(hour, hed, hen);
            hed = value.hd;
            hen = value.hn;
          } //festivo
          else if (
            (holyStart.value && day !== 0 && day === startDay) ||
            (holyEnd.value && day !== 0 && day > startDay)
          ) {
            //horas extra
            if (i >= ORDINARY_TIME1) {
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
            if (i >= ORDINARY_TIME2) {
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
      }

      //descuento 40 min dias normales
      if (
        (sixDays.value && hod >= ORDINARY_TIME1) ||
        (fiveDays.value && hod >= ORDINARY_TIME2)
      ) {
        hod = hod - REST_TIME;
      }
      //descuento 40 min estras diurnas
      if (hed >= ORDINARY_TIME1) {
        hed = hed - REST_TIME;
      }
      //descuento 40 min domingos
      if (hodd >= ORDINARY_TIME1) {
        hodd = hodd - REST_TIME;
      }
      //descuento 40 min festivos
      if (hofd >= ORDINARY_TIME1) {
        hofd = hofd - REST_TIME;
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
      setShowModal(false);
      setSalary(defaultState);
      setStartDate(timeObj);
      setEndDate(timeObj);
      setHolyStart(boolState);
      setFiveDays(boolState);
      setSixDays(boolState);
      setHolyEnd(boolState);
    } else {
      return;
    }
  }

  return (
    <Container>
      <Modal visible={showModal}>
        <article>
          <h1>Nuevo Tiempo Extra</h1>
          <Input
            type="text"
            text="Tu salario"
            value={salary.text}
            updater={setSalary}
            error={salary.error}
            message={salary.message}
          />
          <Checkbox
            text="jornada de 5 dias?"
            value={fiveDays.value}
            updater={setFiveDays}
            error={fiveDays.error}
          />
          <Checkbox
            text="jornada de 6 dias?"
            value={sixDays.value}
            updater={setSixDays}
            error={sixDays.error}
          />
          <DateTimeInput
            text="Fecha y hora de inicio"
            value={startDate.text}
            updater={setStartDate}
            error={startDate.error}
            message={startDate.message}
          />
          <Checkbox
            text="Es festivo?"
            value={holyStart.value}
            updater={setHolyStart}
            error={holyStart.error}
          />
          <DateTimeInput
            text="Fecha y hora de fin"
            value={endDate.text}
            updater={setEndDate}
            error={endDate.error}
            message={endDate.message}
          />
          <Checkbox
            text="Es festivo?"
            value={holyEnd.value}
            updater={setHolyEnd}
            error={holyEnd.error}
          />
          <Button
            name="Calcular"
            type="basic"
            invertColor={true}
            action={calcExtraHour}
          />
        </article>
      </Modal>
      <section>
        <article>
          <h1>Horas Extra</h1>
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
      <img
        src={Add}
        alt="add"
        onClick={() => {
          setShowModal(!showModal);
        }}
      />
    </Container>
  );
}

export default ExtraHours;
