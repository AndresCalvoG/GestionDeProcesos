import React, { useState } from "react";
import { AppContext } from "../context";

import "./styles/workOrder.css";
import InputForm from "../components/InputForm";
import SelectOption from "../components/SelectOption";

function WorkOrder() {
  const [area, setArea] = useState("");
  const [equipo, setEquipo] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const { user, getCurrentDate } = React.useContext(AppContext);

  const areas = [
    "envase",
    "empaque",
    "recubrimiento",
    "esteril",
    "planta 4",
    "planta 2",
    "tableteria",
    "granulacion",
    "mezclas secas",
    "capsulas blandas",
    "recubrimiento",
  ];
  let equipos = ["otro", "uno"];

  if (area === "envase") {
    equipos = ["siebler 3", "siebles 4"];
  } else {
    equipos = ["otro", "dos"];
  }

  return (
    <>
      <main className="mainWorkOrder">
        <h1>
          Departamento de Mantenimiento <br />
          Solicitud de Trabajo
        </h1>
        <section className="mainWorkOrder-cont">
          <form>
            <div className="contHeder">
              <label>
                Nº:
                <InputForm
                  type="text"
                  size="1"
                  value="1"
                  readOnly={true}
                  class="inputFormOrder"
                />
              </label>
              <label>
                Fecha:
                <InputForm
                  type="text"
                  size="7"
                  value={getCurrentDate().fullDate}
                  readOnly={true}
                  class="inputFormOrder"
                />
              </label>
              <label>
                Hora:
                <InputForm
                  type="text"
                  size="5"
                  value={getCurrentDate().fullHour}
                  readOnly={true}
                  class="inputFormOrder"
                />
              </label>
            </div>

            <div className="contBody">
              <label>
                Area:
                <SelectOption options={areas} value={area} action={setArea} />
              </label>
              <label>
                Equipo:
                <SelectOption
                  options={equipos}
                  value={equipo}
                  action={setEquipo}
                />
              </label>
              <div className="contBody-user">
                <label>Solicitado por: </label>
                <InputForm
                  type="text"
                  size="20"
                  value={solicitante}
                  action={setSolicitante}
                  readOnly={false}
                  class="inputFormOrder"
                />
              </div>
              <div className="contBody-text">
                <label>Descripcion de la Anomalia</label>
                <textarea rows="13" cols="45"></textarea>
              </div>
            </div>

            <div className="contBody-select">
              <div className="contBody-user">
                <label>Asignado A: </label>
                <InputForm
                  type="text"
                  size="24"
                  value={`${user.fields.first.stringValue} ${user.fields.last.stringValue}`}
                  readOnly={true}
                  class="inputFormOrder"
                />
              </div>
              <div className="contBody-select--radius">
                <label htmlfor="correctivo">Correctivo</label>
                <input type="checkbox" id="correctivo" />
                <br />
                <label for="preventivo">Preventivo</label>
                <input type="checkbox" id="preventivo" />
                <br />
                <label for="mejora">Mejora</label>
                <input type="checkbox" id="mejora" />
              </div>
              <div className="contBody-select--radius">
                <label for="cuadre">Cuadre</label>
                <input type="checkbox" id="cuadre" />
                <br />
                <label for="nuevo">P.Nuevo</label>
                <input type="checkbox" id="nuevo" />
                <br />
                <label for="locativo">Locativo</label>
                <input type="checkbox" id="locativo" />
              </div>
            </div>

            <div className="contBody-time">
              <div className="time">
                <label for="Datei">Fecha inicio:</label>
                <input type="Date" id="Datei" size="10" required />
                <br />
                <label for="horai">Hora inicio:</label>
                <input type="time" id="horai" size="5" required />
              </div>
              <div className="time">
                <label for="Datef">Fecha fin:</label>
                <input
                  type="Date"
                  id="Datef"
                  size="10"
                  name="fechaf"
                  required
                />
                <br />
                <label for="horaf">Hora fin:</label>
                <input type="time" id="horaf" size="5" required />
              </div>
            </div>

            <div className="contBody">
              <div className="contBody-text">
                <label>Descripción de la reparación</label>
                <textarea rows="13" cols="45"></textarea>
              </div>
            </div>

            <div className="contBody-select">
              <div className="contBody-select--radius">
                <label for="correctivo">
                  ¿La reparacion afecto el estado calificado del equipo?
                </label>
                <label>Si</label>
                <input type="checkbox" id="si3" name="si3" value="si" />
                <label>No</label>
                <input type="checkbox" id="no3" name="no3" value="no" />
              </div>
              <div className="contBody-select--radius">
                <label for="cuadre">¿Equipo operativo conforme?</label>
                <label>Si</label>
                <input type="checkbox" id="si3" name="si3" value="si" />
                <label>No</label>
                <input type="checkbox" id="no3" name="no3" value="no" />
              </div>
              <div className="contBody-select--radius">
                <label for="cuadre">¿Requerimientos pendientes?</label>
                <label>Si</label>
                <input type="checkbox" id="si3" name="si3" value="si" />
                <label>No</label>
                <input type="checkbox" id="no3" name="no3" value="no" />
              </div>
            </div>
            <div className="contFooter">
              <label>Atendido por:</label>
              <input
                type="text"
                value={`${user.fields.first.stringValue} ${user.fields.last.stringValue}`}
              />
              <br />
              <label>Supervisor y/o jefe de MTTO:</label>
              <input type="text" />
              <br />
              <label>Supervisor y/o jefe de Area:</label>
              <input type="text" />
              <div className="contFooter-btn">
                <button id="btn">Guardar</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default WorkOrder;
