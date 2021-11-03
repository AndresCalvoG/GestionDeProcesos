import React, { useState } from "react";
import { AppContext } from "../context";

import "./styles/documents.css";
import newOrder from "../images/newPage.png";
import deleteFile from "../images/delete.png";
import Card from "../components/Card";
import Notifier from "../components/Notifier";
import Modal from "../components/Modal";
import SelectOption from "../components/SelectOption";

function Documents() {
  const [orderDeleted, setOrderDeleted] = useState("");
  const { user, newNotify, setNewNotify } = React.useContext(AppContext);

  const showDelete = () => {
    var menu = document.getElementById("modalDelete");
    if (menu.classList.contains("hidenModal")) {
      menu.classList.replace("hidenModal", "modalBackground-delete");
    } else {
      menu.classList.replace("modalBackground-delete", "hidenModal");
    }
  };

  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva Orden" image={newOrder} route="/WorkOrder" />
        <Card
          name="Eliminar orden"
          image={deleteFile}
          route=""
          action={showDelete}
        />
      </section>
      <section className="main-notify">
        <Notifier />
      </section>
      <Modal id="modalDelete">
        {/* <SelectOption
          options={newNotify}
          value={orderDeleted}
          action={setOrderDeleted}
        /> */}
        <p>Eliminar</p>
        <p onClick={showDelete}>Cancelar</p>
      </Modal>
    </main>
  );
}

export default Documents;
