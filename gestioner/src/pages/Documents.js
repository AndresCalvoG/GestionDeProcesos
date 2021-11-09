import React, { useState } from "react";
import { AppContext } from "../context";
import database from "../utils/fireStore";

import "./styles/documents.css";
import newOrder from "../images/newPage.png";
import deleteFile from "../images/delete.png";
import Card from "../components/Card";
import Notifier from "../components/Notifier";
import Modal from "../components/Modal";
import SelectOption from "../components/SelectOption";
import Button from "../components/Button";

function Documents() {
  const [orderDeleted, setOrderDeleted] = useState("");
  const [orderDeletedId, setOrderDeletedId] = useState("");
  const [clase, setClase] = useState("hidenModal");
  const { user, newNotify, setUpdate, update } = React.useContext(AppContext);

  const showModal = () => {
    setOrderDeleted("");
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  async function DeleteOrder() {
    await database.deleteOrder({
      userID: user.fields.id.stringValue,
      orderID: orderDeletedId,
    });
    setUpdate(!update);
    showModal();
  }

  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva Orden" image={newOrder} route="/WorkOrder" />
        <Card
          name="Eliminar orden"
          image={deleteFile}
          route=""
          action={showModal}
        />
      </section>
      <section className="main-notify">
        <Notifier />
      </section>
      <Modal classe={clase}>
        <div className="main-modal">
          <h2>Buscar Orden </h2>
          <SelectOption
            options={newNotify}
            value={orderDeleted}
            action={setOrderDeleted}
            actionId={setOrderDeletedId}
            obj={true}
          />
          <div className="modalKeypad">
            <Button name="Eliminar" class="modalMenu" action={DeleteOrder} />
            <Button name="cancelar" class="modalMenu" action={showModal} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Documents;
