import React, { useEffect } from "react";
import { AppContext } from "../context";
import database from "../utils/fireStore";
import "./styles/notifier.css";

function Notifier() {
  const { user, newNotify, setNewNotify } = React.useContext(AppContext);

  useEffect(() => {
    (async function () {
      let order = await database.getOrder(user.fields.id.stringValue);
      //console.log(order);
      setNewNotify(order.docs);
    })();
  }, []);

  return (
    <div className="notify">
      <h1>Ultimas Ordenes Creadas</h1>
      <ul>
        {newNotify.map((element) => {
          let path = element._delegate._document.data.value.mapValue.fields;
          return (
            <li key={element.id}>
              {`${path.fecha.stringValue}
              ${path.equipo.stringValue}  
              ${path.anomalia.stringValue}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notifier;
