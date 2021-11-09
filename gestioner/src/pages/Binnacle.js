import React from "react";
import TQ from "../images/tq.png";
//import "./styles/binnacle.css";

function Binnacle() {
  return (
    <>
      <main className="main-container">
        <div class="title">
          <h2>
            Area de Manufactura
            <br />
            Bitacora de actividades de Area y Equipos{" "}
          </h2>
        </div>

        <div class="img">
          <img src={TQ} alt="tq" width="90%" height="100%" />
        </div>

        <div>
          <form>
            <table>
              <tr>
                <th rowspan="2">#Item</th>
                <th colspan="2">Inicio</th>
                <th>Producto / Actividad</th>
                <th rowspan="2">
                  Persona <br />
                  Responsable
                </th>
                <th rowspan="2">Lote</th>
                <th rowspan="2">OP</th>
                <th colspan="3">Final</th>
                <th rowspan="2">Verifico</th>
              </tr>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Descripcion</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Firma</th>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </table>
          </form>
        </div>
      </main>
    </>
  );
}

export default Binnacle;
