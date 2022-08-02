import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const AreasList = styled.section`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: var(--blue);
  color: var(--blue);
  padding: 10px 14px 0 14px;
  overflow: auto;
  white-space: nowrap;
`;

const AreaItem = styled.article`
  width: 10rem;
  height: 3rem;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  margin-right: 10px;
  padding: 6px 0 8px 0;
  background-color: ${(props) =>
    props.current ? "var(--purple)" : "var(--blue)"};
  color: var(--white);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.current ? "" : "var(--white)")};
    color: ${(props) => (props.current ? "" : "var(--blue)")};
  }
`;

const ContributionList = styled.section`
  width: 30.4rem;
  height: 100rem;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;
const ContributionItem = styled.article`
  width: 30rem;
  height: 10.3rem;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: var(--baseWhite);
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  div.like {
    width: 20%;
    p {
      width: 4rem;
      height: 5rem;
      font-size: 1.6rem;
      text-align: center;
      padding-top: 0.5rem;
      border-radius: 10px;
      background-color: var(--white);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    }
  }

  div {
    width: 80%;
    h1 {
      width: 100%;
      height: 6rem;
      font-size: 2rem;
      text-align: left;
      color: var(--blue);
    }
    figure {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 15px;
      }
      p {
        width: 10rem;
        font-size: 1.4rem;
        font-weight: bold;
        color: var(--text);
      }
    }
  }
`;

function Blog() {
  const [selected, setSelected] = useState(0);
  const names = ["Envase", "Empaque", "Granulacion", "Esteril", "Imprenta"];
  const areas = ["Blog", ...names];

  return (
    <>
      <AreasList>
        {areas.map((value, index) => {
          return (
            <AreaItem
              current={index === selected ? true : false}
              onClick={() => {
                setSelected(index);
              }}
              key={index}
            >
              <p>{value}</p>
            </AreaItem>
          );
        })}
      </AreasList>
      <ContributionList>
        <h1>Posts</h1>
        <ContributionItem>
          <div className="like">
            <p>
              likes
              <br /> 30
            </p>
          </div>
          <div>
            <h1>Cuadre de camara Antares Blister 6 </h1>
            <figure>
              <img src="" alt="user" />
              <p>Andres Calvo</p>
            </figure>
          </div>
        </ContributionItem>
      </ContributionList>
    </>
  );
}

export default Blog;
