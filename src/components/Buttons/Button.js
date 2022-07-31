import React from "react";
import styled, { keyframes } from "styled-components";
import "./button.css";

const arrow = keyframes`
from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0px);
  }
`;

const ButtonWithImage = styled.button`
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  animation: ${arrow} 1.5s ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--blue);

  p {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 35%;
    height: 100%;
  }
  &:hover {
    border: 2px solid var(--white);
    color: var(--white);
    background-color: var(--blue);
    border-radius: 20px;
    opacity: 0.8;
  }
`;
const handleStyles = (value) => {
  switch (value) {
    case "button":
      return `
        width: 11rem;
        height: 4rem;
        border: none;
        padding: 0.7rem;
        font-size: 1.6rem;
        box-shadow: 0px 8px 10px 0px #575656;
        border-radius: 20px;
        @media (max-width: 410px){
          width: 14rem;
          height: 5rem;
          font-size: 2rem;
        }
        `;
    case "button--long submitb":
      return `
        width: 70vw;
        max-width: 29rem;
        height: 4rem;
        border: none;
        padding: 0.7rem;
        font-size: 2rem;
        box-shadow: 0px 8px 10px 0px #575656;
        border-radius: 20px;
        background-color: var(--white);
        color: var(--blue);
        font-weight: bold;
        @media (max-width: 410px){
          height: 5rem;
          font-size: 2.5rem;
        }
      `;
    case "button--long submit":
      return `
        width: 70vw;
        max-width: 29rem;
        height: 4rem;
        border: none;
        padding: 0.7rem;
        font-size: 2rem;
        box-shadow: 0px 8px 10px 0px #575656;
        border-radius: 20px;
        background-color: var(--blue);
        color: var(--white);
        font-weight: bold;
        @media (max-width: 410px){
          height: 5rem;
          font-size: 2.5rem;
        }
      `;
    case "link":
      return `
      
      `;
  }
};
const StyledButton = styled.button`
  ${(props) => handleStyles(props.class)}
`;

function Button(props) {
  return (
    <>
      {props.class === "link" ? (
        <ButtonWithImage>{props.children}</ButtonWithImage>
      ) : (
        <StyledButton class={props.class} onClick={props.action}>
          {props.name}
          {props.children}
        </StyledButton>
      )}
    </>
  );
}

export default Button;
