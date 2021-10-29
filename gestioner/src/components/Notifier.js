import React, { useEffect, useState } from "react";
import { AppContext } from "../context";
import database from "../utils/fireStore";
import "./styles/notifier.css";

function Notifier() {
  const [newNotify, setNewNotify] = useState([
    {
      _delegate: {
        _document: {
          data: {
            value: { mapValue: { fields: { anomalia: "hhh" } } },
          },
        },
      },
      id: "",
    },
  ]);

  const { user } = React.useContext(AppContext);

  useEffect(() => {
    (async function () {
      let order = await database.getOrder(user.fields.id.stringValue);
      setNewNotify(order.docs);
    })();
  }, []);

  return (
    <div className="notify">
      <ul>
        {newNotify.map((element) => {
          return (
            <li key={element.id}>
              {
                element._delegate._document.data.value.mapValue.fields.anomalia
                  .stringValue
              }
            </li>
          );
        })}
        <li>notifier</li>
      </ul>
    </div>
  );
}

export default Notifier;
