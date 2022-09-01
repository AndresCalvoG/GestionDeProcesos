import React, { useEffect } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";
import Auth from "../../utils/autenticacion";

import ScrollList from "../../components/ScrollList/ScrollList";

const ContributionList = Styled.section`
  width: 30.4rem;
  height: 100rem;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;
const ContributionItem = Styled.article`
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
      font-size: 1.3rem;
      text-align: center;
      padding-top: 1rem;
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
  const {
    Company,
    areas,
    updateAreasCompany,
    adminEmail,
    adminPass,
    saveActualMachine,
  } = React.useContext(AppContext);
  const items = [{ name: "Blog", id: "0" }, ...areas];

  useEffect(() => {
    async function fetchData() {
      await Auth.authEmailPass(adminEmail, adminPass);
      await updateAreasCompany(Company.id);
    }
    saveActualMachine(null);
    fetchData();
  }, []);

  return (
    <>
      <ScrollList list={items} />
      <ContributionList>
        <h1>Posts</h1>
        <ContributionItem>
          <div className="like">
            <p>
              Views
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
