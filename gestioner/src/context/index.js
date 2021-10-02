import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";

const AppContext = React.createContext();

function AppProvider(props) {
  //estados de Home
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");
  //estados de pagina de registro
  const [contain, setContain] = useState(true);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cargo, setCargo] = useState("");
  const [code, setCode] = useState("");
  const [faultReg, setFaultReg] = useState("");
  const nombres = useMemo(() => `${nombre} ${apellido}`, [nombre, apellido]);
  // estados de password reset
  const [emailReset, setEmailReset] = useState("");
  const [faultReset, setFaultReset] = useState("");

  const history = useHistory();

  const getDataUsers = async () => {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    if (response !== "/") {
      data = await Auth.getDataUser(response.uid);
    }
    if (data.exists) {
      setUser(data._delegate._document.data.value.mapValue);
      setAuth(true);
      console.log("reder true en app");
    } else {
      setAuth(false);
      setUser({ value: false });
      console.log("render false en app");
    }
  };

  // funciones navbar
  const showMenu = () => {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hiden")) {
      menu.classList.replace("hiden", "modalBackground");
    } else {
      menu.classList.replace("modalBackground", "hiden");
    }
  };

  //Funciones de la pagina Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      setFault("Por favor completa todos los campos");
    } else {
      setFault("");
      const response = await Auth.autEmailPass(email, password);

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario ó Email Incorrecto");
      } else if (response.code === "auth/invalid-email") {
        setFault("Email Invalido");
      } else if (response === "Por favor verifique email enviado") {
        setFault(response);
      } else {
        await getDataUsers();
        history.push(response);
      }
    }
  };

  const handleReg = () => {
    setContain(false);
    setNombre("");
    setApellido("");
    setEmailReg("");
    setPasswordReg("");
    setCargo("");
    setCode("");
    setFaultReg("");
    history.push("/register");
  };

  // funciones de home
  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    history.push(route);
    getDataUsers();
    setEmail("");
    setPassword("");
  };

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
        const result = await Auth.crearUsersDb({
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

  //funciones pagina de reset password
  const handleReset = async () => {
    const response = await Auth.resetPassword(emailReset);
    if (response === "auth/invalid-email") {
      setFaultReset("Correo invalido");
    } else if (response === "auth/user-not-found") {
      setFaultReset("Usuario no Registrado");
    } else {
      setFaultReset(response);
      setEmailReset("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        auth,
        email,
        password,
        fault,
        contain,
        nombre,
        apellido,
        emailReg,
        passwordReg,
        cargo,
        code,
        faultReg,
        emailReset,
        faultReset,
        setUser,
        setAuth,
        setEmail,
        setPassword,
        setFault,
        setNombre,
        setApellido,
        setEmailReg,
        setPasswordReg,
        setCargo,
        setCode,
        setFaultReg,
        setEmailReset,
        setFaultReset,
        handleLogin,
        handleReg,
        handleLogout,
        handleRegister,
        handleReset,
        getDataUsers,
        showMenu,
        nombres,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
