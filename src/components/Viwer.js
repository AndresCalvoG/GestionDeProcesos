import React, { useEffect, useState } from "react";
import database from "../utils/fireStore";
import "./styles/viwer.css";

function Viwer(props) {
  const [data, setData] = useState([
    {
      name: { stringValue: "" },
      user: { stringValue: "" },
      password: { stringValue: "" },
      type: { stringValue: "" },
    },
  ]);

  return (
    <section className="viwer-container">
      <h1 className="viwer-title">Contraseñas</h1>
      <article className="viwer-info">
        <div className="info-card">
          <table className="info-table">
            <thead>
              <tr>
                <th className="row-celd--title">Nombre</th>
                <th className="row-celd--title">Usuario</th>
                <th className="row-celd--title">Contraseña</th>
                <th className="row-celd--title">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <tr key={element.user.stringValue}>
                    <td className="row-celd--item">
                      {element.name.stringValue}
                    </td>
                    <td className="row-celd--item">
                      {element.user.stringValue}
                    </td>
                    <td className="row-celd--item">
                      {element.password.stringValue}
                    </td>
                    <td className="row-celd--item">
                      {element.type.stringValue}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Viwer;
