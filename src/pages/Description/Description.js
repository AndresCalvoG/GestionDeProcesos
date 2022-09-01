import React, { useEffect } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";
import { useHistory } from "react-router-dom";

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

function Description() {
  const { actualMachine } = React.useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!actualMachine) {
      history.replace("/Blog");
    }
  }, [actualMachine, history]);

  return (
    <>
      {actualMachine ? (
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
          </section>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Description;
