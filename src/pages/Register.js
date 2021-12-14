import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import Progress from "../components/progress/Progress";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

import "./styles/register.css";

const Register = () => {
  const adminEmail = "andrescalvo9407@gmail.com";
  const adminPass = "987654321";
  //estados de pagina de registro
  const [contain, setContain] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [area, setArea] = useState("");
  const [cargo, setCargo] = useState("");
  const [code, setCode] = useState("");
  const [fault, setFault] = useState("");
  const [clase, setClase] = useState("hidenProgress");
  const nombres = `${firstName} ${lastName}`;

  const { companyID, setCompanyID } = React.useContext(AppContext);

  // funciones de pagina de registro
  const handleRegister = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      emailReg === "" ||
      passwordReg === "" ||
      cargo === "" ||
      companyID === "" ||
      area === "" ||
      code === ""
    ) {
      setFault("Por favor completa TODOS los campos");
    } else {
      setFault("");
      setClase("showProgress");
      await Auth.authEmailPass(adminEmail, adminPass);
      let existID = await database.companyExist(companyID);
      Auth.logoutUsers();
      if (existID === false) {
        setFault("Empresa no Existe o Codigo Empresarial Equivocado");
        return;
      }
      const response = await Auth.crearCuentaEmailPass(
        emailReg,
        passwordReg,
        nombres
      );

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario Incorrecto");
      } else if (response.code === "auth/invalid-email") {
        setFault("Email invalido");
      } else if (response.code === "auth/weak-password") {
        setFault("Contraseña demasiado corta");
      } else if (response.code === "auth/email-already-in-use") {
        setFault("Email ya registrado");
      } else if (response.uid) {
        await Auth.authEmailPass(adminEmail, adminPass);
        await database.crearUsersDb({
          first: firstName,
          last: lastName,
          email: emailReg,
          charge: cargo,
          company: companyID,
          area: area,
          code: code,
          id: response.uid,
        });
        setContain(true);
        Auth.logoutUsers();
      } else {
        console.log(response.code);
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
              <InputForm
                type="email"
                label="Tu correo..."
                value={emailReg}
                action={setEmailReg}
                class="inputForm"
              />
              <InputForm
                type="password"
                label="Contraseña..."
                value={passwordReg}
                action={setPasswordReg}
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
              <span className="fault">{fault}</span>
              <Button
                name="Registrarme"
                class="submit"
                action={handleRegister}
              />
              <Progress class={clase} />
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
                  .map((v) => v[0].toUpperCase() + v.substr(1))
                  .join(" ")}
              </b>{" "}
              debes realizar el proceso de verificacion desde el correo enviado
              a tu <b>email</b> para ingresar correctamente a la plataforma
            </p>
          </section>
          <Link to="/" className="mainReset-link">
            &#11013; Regresar a inicio de sesion
          </Link>
        </main>
      )}
    </>
  );
};

export default Register;
