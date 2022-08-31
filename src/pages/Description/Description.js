import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";

const Container = Styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  color: var(--blue);

  section{
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure{
      width: 90%;
      img{
        object-fit: contain;
      }
    }
    article{
      width: 90%;
      h1{
        font-size: 2.5rem;
        margin: 1rem 0 1rem 0;
      }
      p{
        font-size: 1.6rem;
        color: black;
      }
    }
  }
`;

const Specs = Styled.table`
    width: 90%;
    font-size: 1.6rem;
    margin-top: 2rem;
    border-collapse: collapse;
    caption{
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    td{
      border-bottom: 1px solid var(--blue);
      padding: 0.5rem;
      color: black;
      &.left{
        border-right: 1px solid var(--blue);
        font-weight: bold;
      }
    }
    tr:hover{
      background-color: var(--purple);
      color: var(--white);
    }
`;

const Components = Styled.article`
  width: 90%;
  display: flex;
  flex-direction: column;
    h1{
      text-align: center;
    }
    ol{
      width: 100%;
      padding-left: 1rem;
      font-size: 1.6rem;
      list-style-position: inside;
      color: var(--text);
    }

`;

function Description() {
  const { actualMachine, saveActualMachine } = React.useContext(AppContext);
  console.log(actualMachine.specs);
  useEffect(() => {
    return () => {
      saveActualMachine({});
    };
  }, []);

  return (
    <Container>
      <section>
        <figure>
          <img src={actualMachine.imageURL} alt={actualMachine.name} />
        </figure>
        <article>
          <h1>{actualMachine.name}</h1>
          <p>{actualMachine.definition}</p>
        </article>
        <Specs>
          <caption>Especificaciones</caption>
          <tbody>
            {actualMachine.specs.map((item) => {
              return (
                <tr key={item.name}>
                  <td className="left">{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </Specs>
        <Components>
          <h1>Componentes</h1>
          <ol>
            <li>desbobinador de PVC</li>
            <li>Planchas de Calefaccion</li>
            <li>Estacion de formado</li>
            <li>Desbobinador de aluminio</li>
            <li>Estacion de sellado</li>
            <li>Avance</li>
            <li>Estacion de precorte</li>
            <li>Estacion de corte</li>
            <li>Bobinador de retazo</li>
          </ol>
        </Components>
      </section>
    </Container>
  );
}

export default Description;
