import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import InputForm from "../components/InputForm";
import SelectOption from "../components/SelectOption";
import Button from "../components/Buttons/Button.js";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

import "./styles/register.css";

const Register = () => {
  const privileges = [
    "Administrador",
    "Gerencia",
    "Supervisor",
    "Tecnico",
    "Operador",
    "Invitado",
  ];
  const [contain, setContain] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [cargo, setCargo] = useState("");
  const [code, setCode] = useState("");
  const [privilege, setPrivilege] = useState();
  const [fault, setFault] = useState("");
  const nombres = `${firstName} ${lastName}`;

  const { companyID, setCompanyID, adminEmail, adminPass, setLoading } =
    React.useContext(AppContext);

  // funciones de pagina de registro
  const handleRegister = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      date === "" ||
      email === "" ||
      password === "" ||
      cargo === "" ||
      companyID === "" ||
      area === "" ||
      code === "" ||
      privilege === ""
    ) {
      setFault("Por favor completa TODOS los campos");
    } else {
      setFault("");
      setLoading(true);
      await Auth.authEmailPass(adminEmail, adminPass);
      let existID = await database.companyExist(companyID);
      Auth.logoutUsers();
      if (existID === false) {
        setFault("Empresa no Existe o Codigo Empresarial Equivocado");
        setLoading(false);
        return;
      }
      const response = await Auth.crearCuentaEmailPass(
        email,
        password,
        nombres
      );

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
        setLoading(false);
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario Incorrecto");
        setLoading(false);
      } else if (response.code === "auth/invalid-email") {
        setFault("Email invalido");
        setLoading(false);
      } else if (response.code === "auth/weak-password") {
        setFault("Contraseña demasiado corta");
        setLoading(false);
      } else if (response.code === "auth/email-already-in-use") {
        setFault("Email ya registrado");
        setLoading(false);
      } else if (response.uid) {
        await Auth.authEmailPass(adminEmail, adminPass);
        await database.crearUsersDb({
          first: firstName,
          last: lastName,
          date: date,
          email: email,
          charge: cargo,
          company: companyID,
          area: area,
          code: code,
          id: response.uid,
          privilege: privilege,
        });
        setContain(true);
        setLoading(false);
        setCompanyID("");
        Auth.logoutUsers();
      } else {
        console.log(response.code);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {!contain ? (
        <main className="mainRegister">
          <section className="mainRegister-form">
            <h1 className="form-title">Registro</h1>
            <form onSubmit={(e) => e.preventDefault()} className="form-body">
              <InputForm
                type="text"
                label="Tu Nombre..."
                value={firstName}
                action={setFirstName}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Tu apellido..."
                value={lastName}
                action={setLastName}
                class="inputForm"
              />
              <label className="form-select">
                Fecha de Nacimiento:
                <InputForm
                  type="date"
                  value={date}
                  action={setDate}
                  class="inputForm"
                />
              </label>
              <InputForm
                type="email"
                label="Tu correo..."
                value={email}
                action={setEmail}
                class="inputForm"
              />
              <InputForm
                type="password"
                label="Contraseña..."
                value={password}
                action={setPassword}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Tu Codigo Empresarial..."
                value={companyID}
                action={setCompanyID}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Area..."
                value={area}
                action={setArea}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Tu cargo..."
                value={cargo}
                action={setCargo}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Tu codigo de empleado..."
                value={code}
                action={setCode}
                class="inputForm"
              />
              <label className="form-select">
                Privilegio:
                <SelectOption
                  options={privileges}
                  value={privilege}
                  action={setPrivilege}
                />
              </label>
              <span className="fault">{fault}</span>
              <div className="form-keypad">
                <Button
                  name="Registrarme"
                  class="button submit"
                  action={handleRegister}
                />
              </div>
            </form>
          </section>
        </main>
      ) : (
        <main className="main-success">
          <h1> Bienvenido </h1>
          <section className="success-content">
            <p>
              <b>
                {nombres
                  .toLowerCase()
                  .trim()
                  .split(" ")
                  .map((v) => v[0].toUpperCase() + v.substring(1))
                  .join(" ")}
              </b>{" "}
              debes realizar el proceso de verificacion desde el correo enviado
              a tu <b>email</b> para ingresar correctamente a la plataforma
            </p>
          </section>
          <Link to="/Login" className="mainReset-link">
            &#11013; Regresar a inicio de sesion
          </Link>
        </main>
      )}
    </>
  );
};

export default Register;
