import React from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import plus from "../images/plus.png";
import less from "../images/less.png";

function Passwords() {
  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva" image={plus} route="" />
        <Card name="Eliminar" image={less} route="" />
      </section>
      {/* <section className="main-notify">
        <Notifier />
      </section> */}
      <Modal id="modalDelete">
        <div className="main-modal">
          <h2>Buscar Orden </h2>
          {/* <SelectOption
            options={newNotify}
            value={orderDeleted}
            action={setOrderDeleted}
            actionId={setOrderDeletedId}
            obj={true}
          /> */}
          <div className="modalKeypad">
            <Button name="Eliminar" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Passwords;
