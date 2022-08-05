import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";

const Container = Styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);

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
  background-color: var(--white);

  button{
    background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;

  &:hover{
    background-color: #ddd;
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
`;

function Description() {
  const { actualMachine, saveActualMachine } = React.useContext(AppContext);
  const [currentTab, setCurrentTab] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     saveActualMachine({});
  //   };
  // }, []);

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
          Sellado
        </button>
        <button
          className="tablinks"
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          Formado
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
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </TabContent>
      ) : currentTab === 1 ? (
        <TabContent>
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
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
