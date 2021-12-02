import React, { useState } from "react";
import { AppContext } from "../context";
import database from "../utils/fireStore";

import "./styles/documents.css";
import Card from "../components/Card";
import Notifier from "../components/Notifier";
import Modal from "../components/Modal";
import SelectOption from "../components/SelectOption";
import Button from "../components/Button";

function Documents() {
  const DeleteFile =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Futils%2Fdelete.png?alt=media&token=f2d0c145-17e4-49ea-9e13-8e02b48a27dc";
  const NewOrder =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Futils%2FnewPage.png?alt=media&token=ea48a429-4bb5-47c0-9565-abd26e7fb58d";
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
        <Card name="Nueva Orden" image={NewOrder} route="/WorkOrder" />
        <Card
          name="Eliminar orden"
          image={DeleteFile}
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
