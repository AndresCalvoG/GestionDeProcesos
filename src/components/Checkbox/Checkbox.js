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
    height: 2rem;
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
    visibility: "visible";
    position: absolute;
    top: 0.5rem;
    left: 1.4rem;
    font-size: 1.2rem;
    color: ${(props) => (props.error ? "red" : "black")};
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
        type="checkbox"
        name={text}
        checked={value}
        onChange={(e) => {
          updater({ value: e.target.checked });
        }}
      />
      <label>
        <span>{text}</span>
      </label>
    </Container>
  );
}

export default Input;
