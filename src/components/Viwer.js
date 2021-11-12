import React from "react";
import "./styles/viwer.css";

function Viwer() {
  return (
    <section className="viwer-container">
      <h1 className="viwer-title">Contraseñas</h1>
      <article className="viwer-info">
        <div className="info-title">
          <h3 className="info-title--area">Envase:</h3>
          <h3 className="info-title--machine">Blister 5</h3>
        </div>
        <div className="info-card">
          <table className="info-table">
            <tr>
              <td colSpan="4">
                <u>
                  <i>Camara Visio Chrome:</i>
                </u>
              </td>
            </tr>
            <tr>
              <th className="row-celd--title">Nombre</th>
              <th className="row-celd--title">Usuario</th>
              <th className="row-celd--title">Contraseña</th>
              <th className="row-celd--title">Tipo</th>
            </tr>
            <tr>
              <td className="row-celd--item">Andres Calvo</td>
              <td className="row-celd--item">19939</td>
              <td className="row-celd--item">12345</td>
              <td className="row-celd--item">admin</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Viwer;
