import React from "react";
import { AppContext } from "../context";

import "./styles/workOrder.css";

function WorkOrder() {
  const { user, getCurrentDate } = React.useContext(AppContext);

  return (
    <>
      <main className="mainWorkOrder">
        <h1>
          Departamento de Mantenimiento <br />
          Solicitud de Trabajo
        </h1>
        <seccion className="mainWorkOrder-cont">
          <form>
            <div className="contHeder">
              <div>
                <label>Nº: </label>
                <input type="text" size="1" value="1" readOnly />
              </div>
              <div>
                <label>Fecha: </label>
                <input
                  type="text"
                  size="7"
                  value={getCurrentDate().fullDate}
                  readOnly
                />
              </div>
              <div>
                <label>Hora: </label>
                <input
                  type="text"
                  size="5"
                  value={getCurrentDate().fullHour}
                  readOnly
                />
              </div>
              <div>
                <label>Area:</label>
                <input type="text" size="6" readOnly />
              </div>
              <div>
                <label>Equipo:</label>
                <input type="text" size="6" required />
              </div>
            </div>

            <div className="contBody">
              <div className="contBody-user">
                <label>Solicitado por: </label>
                <input type="text" value="" required />
              </div>
              <div className="contBody-text">
                <label>Descripcion de la Anomalia</label>
                <textarea rows="13" cols="45"></textarea>
              </div>
            </div>

            <div className="contBody-select">
              <div className="contBody-user">
                <label>Asignado A: </label>
                <input
                  type="text"
                  value={`${user.fields.first.stringValue} ${user.fields.last.stringValue}`}
                  readOnly
                />
              </div>
              <div className="contBody-select--radius">
                <label for="correctivo">Correctivo</label>
                <input type="radio" id="correctivo" />
                <br />
                <label for="preventivo">Preventivo</label>
                <input type="radio" id="preventivo" />
                <br />
                <label for="mejora">Mejora</label>
                <input type="radio" id="mejora" />
              </div>
              <div className="contBody-select--radius">
                <label for="cuadre">Cuadre</label>
                <input type="radio" id="cuadre" />
                <br />
                <label for="nuevo">P.Nuevo</label>
                <input type="radio" id="nuevo" />
                <br />
                <label for="locativo">Locativo</label>
                <input type="radio" id="locativo" />
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

            {/*

            <div className="ap">
              <label>Atendido por:</label>
              <input type="text" size="10" />
              <br />
              <label>Supervisor y/o jefe de MTTO:</label>
              <input type="text" size="10" />
              <br />
              <label>Supervisor y/o jefe de Area:</label>
              <input type="text" size="10" />
            </div>

            <div className="g">
              <button id="btn">Guardar</button>
            </div>
            */}
          </form>
        </seccion>
      </main>
    </>
  );
}

export default WorkOrder;
