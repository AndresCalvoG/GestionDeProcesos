import React from "react";

//import "./styles/help.css";

function Help() {
  return (
    <>
      <main className="main-container">
        <h1>Reporte de Tiempo Extra</h1>
        <div className="forme">
          <form>
            <label>
              Fecha Inicial:
              <input type="date" name="FI" id="FI" />
            </label>
            <label for="datei">Fecha Final:</label>
            <input type="date" name="FF" id="FF" />

            <label for="turn">Tipo de Turno:</label>
            <select id="Turnos">
              <option value="volvo">T1 Mañana</option>
              <option value="saab">T2 Tarde</option>
              <option value="fiat">T3 Trasnocho</option>
              <option value="fiat">T3 Extendido</option>
              <option value="fiat">T1 Extendido</option>
            </select>
            <input type="button" onclick="Funcion()" value="Calcular" />
            <br />
            <br />
            <br />

            <div className="table">
              <table>
                <tr id="r">
                  <th className="dds">Dia de Semana</th>
                  <th className="f">Fecha</th>
                  <th className="hit">Hora Inicio de Turno</th>
                  <th className="hdf">Hora Fin de Turno</th>
                  <th className="rn">Recargo Nocturno (35%)</th>
                  <th className="ed">Extras Diurnas (125%)</th>
                  <th className="en">Extras Nocturnas (175%)</th>
                  <th className="ef">Extras festivas (175%)</th>
                  <th className="rf">Recargo Festivo (75%)</th>
                  <th className="t">Transporte</th>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td id="dom2"></td>
                  <td>
                    <input type="time" id="hid2" name="hid2" />
                  </td>
                  <td>
                    {" "}
                    <input type="time" id="hfd2" name="hfd2" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Lunes</td>
                  <td id="lun"></td>
                  <td>
                    <input type="time" id="hil" name="hil" />
                  </td>
                  <td>
                    <input type="time" id="hfl" name="hfl" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td id="mar"></td>
                  <td>
                    <input type="time" id="him" name="him" />
                  </td>
                  <td>
                    <input type="time" id="hfm" name="hfm" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Miercoles</td>
                  <td id="mie"></td>
                  <td>
                    <input type="time" id="himi" name="himi" />
                  </td>
                  <td>
                    <input type="time" id="hfmi" name="hfmi" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td id="jue"></td>
                  <td>
                    <input type="time" id="hij" name="hij" />
                  </td>
                  <td>
                    <input type="time" id="hfj" name="hfj" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td id="vie"></td>
                  <td>
                    <input type="time" id="hiv" name="hiv" />
                  </td>
                  <td>
                    <input type="time" id="hfv" name="hfv" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sabado</td>
                  <td id="sab"></td>
                  <td>
                    <input type="time" id="his" name="his" />
                  </td>
                  <td>
                    <input type="time" id="hfs" name="hfs" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td id="dom"></td>
                  <td>
                    <input type="time" id="hid" name="hid" />
                  </td>
                  <td>
                    <input type="time" id="hfd" name="hfd" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="4">Total:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>

            <div class="but"></div>
            <br />
          </form>
        </div>
      </main>
    </>
  );
}

export default Help;
