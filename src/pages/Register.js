import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cargo, setCargo] = useState("");
  const [code, setCode] = useState("");
  const [faultReg, setFaultReg] = useState("");
  const [clase, setClase] = useState("hidenProgress");
  const nombres = `${nombre} ${apellido}`;

  // funciones de pagina de registro
  const handleRegister = async () => {
    if (
      nombre === "" ||
      apellido === "" ||
      emailReg === "" ||
      passwordReg === "" ||
      cargo === "" ||
      code === ""
    ) {
      setFaultReg("Por favor completa TODOS los campos");
    } else {
      setFaultReg("");
      setClase("showProgress");
      const response = await Auth.crearCuentaEmailPass(
        emailReg,
        passwordReg,
        nombres
      );

      if (response.code === "auth/wrong-password") {
        setFaultReg("Contraseña Incorrecta");
      } else if (response.code === "auth/user-not-found") {
        setFaultReg("Usuario Incorrecto");
      } else if (response.code === "auth/invalid-email") {
        setFaultReg("Email invalido");
      } else if (response.code === "auth/weak-password") {
        setFaultReg("Contraseña demasiado corta");
      } else if (response.code === "auth/email-already-in-use") {
        setFaultReg("Email ya registrado");
      } else if (response.uid) {
        await Auth.authEmailPass(adminEmail, adminPass);
        await database.crearUsersDb({
          first: nombre,
          last: apellido,
          email: emailReg,
          cargo: cargo,
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
                label="Tu nombre..."
                value={nombre}
                action={setNombre}
                class="inputForm"
              />
              <InputForm
                type="text"
                label="Tu apellido..."
                value={apellido}
                action={setApellido}
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
              <span>{faultReg}</span>
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
