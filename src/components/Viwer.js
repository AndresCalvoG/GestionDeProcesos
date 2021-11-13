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

  useEffect(() => {
    async function fetchData() {
      if (props.area === "" || props.machine === "" || props.parte === "") {
        setData([
          {
            name: { stringValue: "" },
            user: { stringValue: "" },
            password: { stringValue: "" },
            type: { stringValue: "" },
          },
        ]);
        //console.log("vacios");
      } else {
        let docRef = await database.getPasswords(
          props.area,
          props.machine,
          props.parte
        );

        let arrayData = docRef.docs.map((element) => {
          return element._delegate._document.data.value.mapValue.fields;
        });
        setData(arrayData);
        //console.log(arrayData);
      }
    }
    fetchData();
  }, [props.area, props.machine, props.parte]);

  return (
    <section className="viwer-container">
      <h1 className="viwer-title">Contraseñas</h1>
      <article className="viwer-info">
        <div className="info-title">
          <h3 className="info-title--area">{props.area}:</h3>
          <h3 className="info-title--machine">{props.machine}</h3>
        </div>
        <div className="info-card">
          <table className="info-table">
            <thead>
              <tr>
                <td colSpan="4">
                  <u>
                    <i>{props.parte}:</i>
                  </u>
                </td>
              </tr>
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
