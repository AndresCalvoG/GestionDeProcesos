import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

import "./styles/register.css";

const Register = () => {
  //estados de pagina de registro
  const [contain, setContain] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cargo, setCargo] = useState("");
  const [code, setCode] = useState("");
  const [faultReg, setFaultReg] = useState("");
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
        const result = await database.crearUsersDb({
          first: nombre,
          last: apellido,
          email: emailReg,
          cargo: cargo,
          code: code,
          id: response.uid,
        });
        console.log(result);
        setContain(true);
      } else {
        console.log(response.code);
      }
    }
  };

  return (
    <>
      {!contain ? (
        <main className="mainRegister">
          <section className="form_register">
            <h1>Registro</h1>
            <form onSubmit={(e) => e.preventDefault()}>
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
              <button onClick={handleRegister}>Registrarme</button>
            </form>
          </section>
        </main>
      ) : (
        <main className="main-success">
          <h1> Bienvenido </h1>
          <br />
          <br />
          <p className="names">
            {nombres
              .toLowerCase()
              .trim()
              .split(" ")
              .map((v) => v[0].toUpperCase() + v.substr(1))
              .join(" ")}
          </p>
          <p>
            {" "}
            Debes realizar el proceso de verificacion desde el correo enviado a
            tu email{" "}
          </p>
        </main>
      )}
    </>
  );
};

export default Register;
