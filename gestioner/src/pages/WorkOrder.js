import React, { useState, useEffect } from "react";
import { AppContext } from "../context";

import "./styles/workOrder.css";
import InputForm from "../components/InputForm";
import SelectOption from "../components/SelectOption";

function WorkOrder() {
  const [area, setArea] = useState("");
  const [equipo, setEquipo] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [fechaInit, setFechaInit] = useState("");
  const [horaInit, setHoraInit] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [supervisorMtto, setSupervisorMtto] = useState("");
  const [supervisorArea, setSupervisorArea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [labor, setLabor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { user, getCurrentDate, getFireStoreData, areas, equipos } =
    React.useContext(AppContext);

  useEffect(() => {
    (async function () {
      await getFireStoreData(area);
    })();
  }, [area]);

  return (
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
              <textarea
                rows="13"
                cols="45"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
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
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[0]}
                  action={setLabor}
                  index={0}
                  array={labor.length}
                />
                Correctivo
              </label>
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[1]}
                  action={setLabor}
                  index={1}
                  array={labor.length}
                />
                Preventivo
              </label>
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[2]}
                  action={setLabor}
                  index={2}
                  array={labor.length}
                />
                Mejora
              </label>
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[3]}
                  action={setLabor}
                  index={3}
                  array={labor.length}
                />
                Cuadre
              </label>
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[4]}
                  action={setLabor}
                  index={4}
                  array={labor.length}
                />
                P.Nuevo
              </label>
              <label>
                <InputForm
                  type="checkbox"
                  value={labor[5]}
                  action={setLabor}
                  index={5}
                  array={labor.length}
                />
                Locativo
              </label>
            </div>
          </div>

          <div className="contBody-time">
            <div className="time">
              <label>Fecha inicio:</label>
              <InputForm
                type="Date"
                size="5"
                value={fechaInit}
                action={setFechaInit}
                readOnly={false}
                class="inputFormOrder"
              />
              <br />
              <label>Hora inicio:</label>
              <InputForm
                type="time"
                size="5"
                value={horaInit}
                action={setHoraInit}
                readOnly={false}
                class="inputFormOrder"
              />
            </div>
            <div className="time">
              <label>Fecha fin:</label>
              <InputForm
                type="Date"
                size="5"
                value={fechaFin}
                action={setFechaFin}
                readOnly={false}
                class="inputFormOrder"
              />
              <br />
              <label>Hora fin:</label>
              <InputForm
                type="time"
                size="5"
                value={horaFin}
                action={setHoraFin}
                readOnly={false}
                class="inputFormOrder"
              />
            </div>
          </div>

          <div className="contBody">
            <div className="contBody-text">
              <label>Descripción de la reparación</label>
              <textarea rows="13" cols="45"></textarea>
            </div>
          </div>

          <div className="contBody-select">
            <div className="contBody-select--radius2">
              <label>
                ¿La reparacion afecto el estado calificado del equipo?
              </label>
              <label>
                Si
                <input type="checkbox" id="si3" />
              </label>
              <label>
                No
                <input type="checkbox" id="no3" />
              </label>

              <label>¿Equipo operativo conforme?</label>
              <label>
                Si
                <input type="checkbox" id="si3" />
              </label>
              <label>
                No
                <input type="checkbox" id="no3" />
              </label>
              <label>¿Requerimientos pendientes?</label>
              <label>
                Si
                <input type="checkbox" id="si3" />
              </label>
              <label>
                No
                <input type="checkbox" id="no3" />
              </label>
            </div>
          </div>
          <div className="contFooter">
            <label>
              Atendido por:
              <InputForm
                type="text"
                size="24"
                value={`${user.fields.first.stringValue} ${user.fields.last.stringValue}`}
                readOnly={true}
                class="inputFormOrder"
              />
            </label>
            <br />
            <label>
              Supervisor y/o jefe de MTTO:
              <InputForm
                type="text"
                size="24"
                value={supervisorMtto}
                action={setSupervisorMtto}
                readOnly={false}
                class="inputFormOrder"
              />
            </label>
            <br />
            <label>
              Supervisor y/o jefe de Area:
              <InputForm
                type="text"
                size="24"
                value={supervisorArea}
                action={setSupervisorArea}
                readOnly={false}
                class="inputFormOrder"
              />
            </label>
            <button>Guardar</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default WorkOrder;
