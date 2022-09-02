import React from "react";
import Style from "styled-components";

import Input from "../../components/InputForm";
import Button from "../../components/Buttons/Button";

function ExtraHours() {
  return (
    <main>
      <h1>Horas Extra</h1>
      <section>
        <article>
          <h3>Nueva horario extra</h3>
          <Input type="text" label="Nombre completo" />
          <Input type="text" label="Salario menseual" />
          <Input type="date" label="fecha" />
          <Input type="time" label="Hora de inicio" />
          <Input type="time" label="Hora de fin" />
          <Button name="Calcular" type="basic" invertColor={true} />
        </article>
      </section>
    </main>
  );
}

export default ExtraHours;
