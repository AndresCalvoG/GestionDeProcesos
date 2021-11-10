import React from "react";
import "./styles/viwer.css";

function Viwer() {
  return (
    <section className="viwer-container">
      <h1 className="viwer-title">Contraseñas</h1>
      <article className="viwer-info">
        <h3 className="info-title">Envase</h3>
        <div className="info-card">
          <p>Blister 5</p>
          <table>
            <tr>
              <td>nombre</td>
              <td>usuario</td>
              <td>contraseña</td>
              <td>tipo</td>
            </tr>
            <tr>
              <td>Andres Calvo</td>
              <td>19939</td>
              <td>12345</td>
              <td>admin</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Viwer;
