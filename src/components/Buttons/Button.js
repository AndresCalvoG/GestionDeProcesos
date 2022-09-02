import React from "react";
import Styled, { keyframes } from "styled-components";

let invertColor = false;

const BasicButton = Styled.button`
  width: 10rem;
  height: 4rem;
  border: ${() => (invertColor ? "none" : "1px solid var(--blue)")};
  background-color: ${() => (invertColor ? "var(--blue)" : "var(--white)")};
  color: ${() => (invertColor ? "var(--white)" : "var(--blue)")};
  font-weight: bold;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 20px;
`;

const arrow = keyframes`
from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0px);
  }
`;

const SmallButton = Styled(BasicButton)`
  width: 11rem;
  font-size: 1.6rem;
  @media (min-width: 410px) {
    width: 14rem;
    height: 5rem;
    font-size: 2rem;
  }
`;
const LongButton = Styled(BasicButton)`
  width: 70vw;
  max-width: 29rem;
  font-size: 2rem;
  @media (min-width: 410px) {
    height: 5rem;
    font-size: 2.5rem;
  }
`;
const ButtonWithImage = Styled(LongButton)`
  margin-top: 1rem;
  animation: ${arrow} 1.5s ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    opacity: 0.8;
  }
`;

function Button(props) {
  invertColor = props.invertColor;
  return (
    <>
      {props.type === "withImage" ? (
        <ButtonWithImage>{props.children}</ButtonWithImage>
      ) : props.type === "basic" ? (
        <SmallButton onClick={props.action}>{props.name}</SmallButton>
      ) : props.type === "long" ? (
        <LongButton onClick={props.action}>{props.name}</LongButton>
      ) : (
        <BasicButton />
      )}
    </>
  );
}

export default Button;
