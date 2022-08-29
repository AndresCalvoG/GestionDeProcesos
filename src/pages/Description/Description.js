import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";

const Container = Styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  color: var(--blue);

  figure{
    width: 90%;
    height: 40rem;
    img{
      object-fit: cover;
    }
  }
  article{
    width: 90%;
    h1{
      font-size: 4rem;
      margin: 2rem 0 2rem 0;
    }
    p{
      font-size: 2rem;
    }
  }
`;
const Tabs = Styled.div`
  width: 90%;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: var(--blue);
  margin-top: 2rem; 

  button{
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    color: var(--white);
    font-size: 1.6rem;

    &:hover{
      background-color: var(--purple);
    }
    &.active{
      background-color: #ccc;
    }
  }
`;

const TabContent = Styled.article`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  
  table{
    width: 100%;
    height: 20rem;
    font-size: 2rem;
    border-collapse: collapse;
    td{
      border-bottom: 1px solid var(--blue);
      padding: 0.5rem;
    }
    tr:hover{
      background-color: var(--purple);
      color: var(--white);
    }
    
  }
`;

function Description() {
  const { actualMachine, saveActualMachine } = React.useContext(AppContext);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    return () => {
      saveActualMachine({});
    };
  }, []);

  return (
    <Container>
      <figure>
        <img src={actualMachine.imageURL} alt={actualMachine.name} />
      </figure>
      <article>
        <h1>{actualMachine.name}</h1>
        <p>
          La maquina blisteadora es uno de los actores que intervienen de forma
          importante en el proceso de manufactura en la industria farmacéutica,
          ya que esta es la encargada de tomar los comprimidos o cápsulas
          contenedoras de los componentes activos usados para el tratamiento de
          enfermedades, y realizarle el empaquetamiento.
        </p>
      </article>
      <Tabs>
        <button
          className="tablinks"
          onClick={() => {
            setCurrentTab(0);
          }}
        >
          Especificaciones
        </button>
        <button
          className="tablinks"
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          Termoformado
        </button>
        <button
          className="tablinks"
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          Corte
        </button>
      </Tabs>
      {currentTab === 0 ? (
        <TabContent>
          <table>
            <tr>
              <td>Longitud de moldeo</td>
              <td>130mm</td>
            </tr>
            <tr>
              <td>Ancho moldura</td>
              <td>85mm</td>
            </tr>
            <tr>
              <td>profundidad de formación</td>
              <td>10mm o 18.5mm</td>
            </tr>
            <tr>
              <td>Ancho máximo de lámina</td>
              <td>168mm max.</td>
            </tr>
            <tr>
              <td>Diametro bobinas</td>
              <td>pvc: max. 400mm aluminio: max. 240mm</td>
            </tr>
            <tr>
              <td>Ciclo/min</td>
              <td>P. formado: 10mm / 50 -- 18.5mm / 35</td>
            </tr>
            <tr>
              <td>Consumo nominal de corriente</td>
              <td>8 KW</td>
            </tr>
            <tr>
              <td>Potencia media absorbida</td>
              <td>5 KW</td>
            </tr>
            <tr>
              <td>Consumo de agua refrigeradora</td>
              <td>
                0.2 m<sup>3</sup>/h
              </td>
            </tr>
            <tr>
              <td>Consumo de aire comprimido</td>
              <td>
                15 m<sup>3</sup>/h max.
              </td>
            </tr>
            <tr>
              <td>Presion de entrada</td>
              <td>6 ... 8 bar</td>
            </tr>
            <tr>
              <td>Largo X Ancho x Altura (mm)</td>
              <td>3600 x 955 x 1470</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>1400 Kg aprox.</td>
            </tr>
          </table>
        </TabContent>
      ) : currentTab === 1 ? (
        <TabContent>
          <p>
            El termoformado es un proceso de gran rendimiento para la
            realización de productos de plástico a partir de láminas
            semielaboradas, que hallan numerosos campos de aplicación, desde el
            envase a piezas para electrodomésticos y automoción
          </p>
          <h2>Métodos de conformado</h2>
          <p>
            El sistema más simple es el estirado de una lámina en estado
            semi-plástico sobre un molde. A medida que la lámina topa con la
            superficie del molde, el estirado se detiene y, como resultado, las
            partes de la lámina que tocan al molde en primer lugar tienen un
            espesor mayor que el resto. Si el estirado es pequeño, no queda
            comprometida la integridad de la pieza y, por tanto, es el
            procedimiento más usado en el envase de tipo "blíster" y en los
            embalajes de tipo burbuja.
          </p>
          <p>
            Formado a presión: similar al moldeo por vacío, sobre la lámina se
            aplica además aire comprimido hasta 1,4 MPa, por lo que el sistema
            precisa de una cámara cerrada superior. Este procedimiento se
            utiliza para conformar lámina de pequeña galga de materiales como el
            PP, que se suministran en rollo, o para transformar lámina de gran
            espesor en piezas con detalle superficial fino.
          </p>
        </TabContent>
      ) : currentTab === 2 ? (
        <TabContent>
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </TabContent>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Description;
