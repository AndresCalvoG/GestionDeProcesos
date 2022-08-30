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
  border: 2px solid black;
    h1{
      text-align: center;
    }
`;

function Description() {
  const { actualMachine, saveActualMachine } = React.useContext(AppContext);

  // useEffect(() => {
  //   return () => {
  //     saveActualMachine({});
  //   };
  // }, []);

  return (
    <Container>
      <section>
        <figure>
          <img src={actualMachine.imageURL} alt={actualMachine.name} />
        </figure>
        <article>
          <h1>{actualMachine.name}</h1>
          <p>
            La maquina blisteadora es uno de los actores que intervienen de
            forma importante en el proceso de manufactura en la industria
            farmacéutica, ya que esta es la encargada de tomar los comprimidos o
            cápsulas contenedoras de los componentes activos usados para el
            tratamiento de enfermedades, y realizarle el envasado.
          </p>
        </article>
        <Specs>
          <caption>Especificaciones</caption>
          <tr>
            <td className="left">Longitud de moldeo</td>
            <td>130mm</td>
          </tr>
          <tr>
            <td className="left">Ancho moldura</td>
            <td>85mm</td>
          </tr>
          <tr>
            <td className="left">profundidad de formación</td>
            <td>10mm o 18.5mm</td>
          </tr>
          <tr>
            <td className="left">Ancho máximo de lámina</td>
            <td>168mm max.</td>
          </tr>
          <tr>
            <td className="left">Diametro bobinas</td>
            <td>pvc: max. 400mm aluminio: max. 240mm</td>
          </tr>
          <tr>
            <td className="left">Ciclo/min</td>
            <td>P. formado: 10mm / 50 -- 18.5mm / 35</td>
          </tr>
          <tr>
            <td className="left">Consumo nominal de corriente</td>
            <td>8 KW</td>
          </tr>
          <tr>
            <td className="left">Potencia media absorbida</td>
            <td>5 KW</td>
          </tr>
          <tr>
            <td className="left">Consumo de agua refrigeradora</td>
            <td>
              0.2 m<sup>3</sup>/h
            </td>
          </tr>
          <tr>
            <td className="left">Consumo de aire comprimido</td>
            <td>
              15 m<sup>3</sup>/h max.
            </td>
          </tr>
          <tr>
            <td className="left">Presion de entrada</td>
            <td>6 ... 8 bar</td>
          </tr>
          <tr>
            <td className="left">Largo X Ancho x Altura (mm)</td>
            <td>3600 x 955 x 1470</td>
          </tr>
          <tr>
            <td className="left">Peso</td>
            <td>1400 Kg aprox.</td>
          </tr>
        </Specs>
        <Components>
          <h1>Componentes</h1>
          <ul>
            <li>desbobinador de PVC</li>
            <li>Planchas de Calefaccion</li>
            <li>Estacion de formado</li>
            <li>Desbobinador de aluminio</li>
            <li>Estacion de sellado</li>
            <li>Avance</li>
            <li>Estacion de precorte</li>
            <li>Estacion de corte</li>
            <li>Bobinador de retazo</li>
          </ul>
        </Components>
      </section>
    </Container>
  );
}

export default Description;
