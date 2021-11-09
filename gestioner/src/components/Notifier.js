import React, { useEffect } from "react";
import { AppContext } from "../context";
import database from "../utils/fireStore";
import "./styles/notifier.css";

function Notifier() {
  let arrayOrders = [];
  const { user, newNotify, setNewNotify, update } =
    React.useContext(AppContext);

  useEffect(() => {
    (async function () {
      let order = await database.getOrder(user.fields.id.stringValue);
      for (let i = 0; i < order.docs.length; i++) {
        arrayOrders.push({
          values: order.docs[i]._delegate._document.data.value.mapValue.fields,
          id: order.docs[i].id,
        });
      }
      //console.log(arrayOrders);
      setNewNotify(arrayOrders);
    })();
  }, [update]);

  return (
    <div className="notify">
      <h1>Ultimas Ordenes Creadas</h1>
      <ul>
        {newNotify.map((element) => {
          return (
            <li key={element.id}>
              {`${element.values.fecha.stringValue}
              ${element.values.equipo.stringValue}  
              ${element.values.anomalia.stringValue}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notifier;
