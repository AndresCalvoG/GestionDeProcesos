import React from "react";
import "./styles/homePage.css";
import Button from "../components/Button";
import information from "../images/information.jpg";

function HomePage() {
  return (
    <>
      <main className="main-HomePage">
        <section className="homePage-Banner">
          <figure className="homePage-Banner--first">
            <img src={information} />
          </figure>
        </section>
        <section className="homePage-info">
          <p>loren</p>
        </section>
        <section className="homePage-keyPad">
          <Button name="Crear Empresa" class="button--long" />
          <Button name="Unirme A Empresa" class="button--long" />
        </section>
      </main>
      <footer className="footer-homePage">
        <p>Create by Andres felipe Calvo Gomez </p>
        <p>contact: 314 684 7924</p>
        <p>Jamundi - Colombi</p>
      </footer>
    </>
  );
}

export default HomePage;
