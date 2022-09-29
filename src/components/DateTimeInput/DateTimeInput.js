import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;

  input{
    width: 100%;
    height: 6rem;
    padding: 20px 12px;
    font-size: 1.6rem;
    border: ${(props) => (props.error ? "1px solid red" : "1px solid #c7c7c7")};
    color: #696969;
    border-radius: 0.25rem;
    outline: none;

    &:focus{
      border-color: blue;
    }
  }
  label span{
    visibility: "visible" ;
    position: absolute;
    top: 0.5rem;
    left: 1.4rem;
    font-size: 1.2rem;
    color: ${(props) => (props.error ? "red" : "var(--blue)")};
  }
  input:focus ~ label span{
    visibility: visible;
  }
  @media (min-width: 768px){
      width: 30rem;
    }
`;

function Input({ text, value, updater, error, message }) {
  return (
    <Container error={error} value={value}>
      <input
        type="datetime-local"
        name={text}
        value={value}
        onChange={(e) => {
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
          convertTime(updater, e.target.value);
        }}
      />
      <label>
        <span>{error ? message : text}</span>
      </label>
    </Container>
  );
}

export default Input;
