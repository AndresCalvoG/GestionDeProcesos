import React from "react";
import { AppContext } from "../context";

import "./styles/workOrder.css";

function WorkOrder() {
  const { getCurrentDate } = React.useContext(AppContext);

  return (
    <>
      <main className="mainWorkOrder">
        <h2>
          Departamento de Mantenimiento <br />
          Solicitud de Trabajo
        </h2>
        <seccion className="mainWorkOrder-cont">
          <form>
            <div className="contHeder">
              <div>
                <label>Solicitud de Trabajo Nº: </label>
                <input type="text" size="1" value="1" />
              </div>
              <div>
                <label for="Date">Fecha: </label>
                <input
                  type="text"
                  size="10"
                  value={getCurrentDate()}
                  required
                />
              </div>
            </div>
            {/*
            <div className="h">
              <label for="hora">Hora:</label>
              <input type="time" size="5" required />
            </div>

            <div className="a">
              <label for="area">Area:</label>
              <input type="text" size="10" required />
            </div>

            <div className="e">
              <label for="area">Equipo:</label>
              <input type="text" size="10" required />
            </div>

            <div className="sp">
              <label for="area">Solicitado por:</label>
              <input type="text" size="10" required />
            </div>

            <div className="tx">
              <label>Descripcion de la Anomalia</label>
              <textarea name="Descripcion" rows="6" cols="130"></textarea>
            </div>

            <div className="radius">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Correctivo</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Preventivo</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Mejora</label>
            </div>

            <div className="radius2">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Cuadre</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">P.Nuevo</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Locativo</label>
            </div>

            <div className="fi">
              <label for="Date">Fecha inicio:</label>
              <input type="Date" size="10" required />
            </div>

            <div className="hi">
              <label for="hora">Hora inicio:</label>
              <input type="time" size="5" required />
            </div>

            <div className="ff">
              <label for="fechaf">Fecha fin:</label>
              <input type="Date" size="10" name="fechaf" required />
            </div>

            <div className="hf">
              <label for="hora">Hora fin:</label>
              <input type="time" size="5" required />
            </div>

            <div className="tx2">
              <label>Descripción de la reparación / Modificación</label>
              <textarea name="Descripcion" rows="6" cols="130"></textarea>
            </div>
            <div className="cb">
              <table>
                <tr>
                  <td>
                    ¿La reparacion afecto el estado calificado del equipo?
                  </td>
                  <td>
                    <label for="si1">Si</label>
                    <input type="checkbox" id="si1" name="si1" value="si" />
                    <label for="no1">No</label>
                    <input type="checkbox" id="no1" name="no1" value="no" />
                  </td>
                </tr>
                <tr>
                  <td>¿Equipo operativo conforme?</td>
                  <td>
                    <label for="si1">Si</label>
                    <input type="checkbox" id="si2" name="si2" value="si" />
                    <label for="no1">No</label>
                    <input type="checkbox" id="no2" name="no2" value="no" />
                  </td>
                </tr>
                <tr>
                  <td>¿Requerimientos pendientes?</td>
                  <td>
                    <label for="si1">Si</label>
                    <input type="checkbox" id="si3" name="si3" value="si" />
                    <label for="no1">No</label>
                    <input type="checkbox" id="no3" name="no3" value="no" />
                  </td>
                </tr>
              </table>
            </div>

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
