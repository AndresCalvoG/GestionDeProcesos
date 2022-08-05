import React, { useEffect } from "react";
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
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;

const openDetail = (e) => {
  console.log(e);
};

function Description() {
  const { actualMachine, saveActualMachine } = React.useContext(AppContext);

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
      <section>
        <Tabs>
          <button className="tablinks" onClick={openDetail("Sellado")}>
            Sellado
          </button>
          <button className="tablinks" onClick={openDetail("Paris")}>
            Formado
          </button>
          <button className="tablinks" onClick={openDetail("Tokyo")}>
            Corte
          </button>
        </Tabs>
        <TabContent id="Sellado">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </TabContent>

        <TabContent id="Paris">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </TabContent>

        <TabContent id="Tokyo">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </TabContent>
      </section>
    </Container>
  );
}

export default Description;
