import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  //algoritmo para local storege
  const authenticated = localStorage.getItem("valid");
  const userActive = localStorage.getItem("user");
  let parseAuth = JSON.parse(authenticated);
  let parseUser = JSON.parse(userActive);

  if (!authenticated) {
    localStorage.setItem("valid", JSON.stringify(false));
    parseAuth = false;
  } else {
    parseAuth = JSON.parse(authenticated);
  }
  if (!userActive) {
    localStorage.setItem("user", JSON.stringify({ value: false }));
    parseUser = { value: false };
  } else {
    parseUser = JSON.parse(userActive);
  }
  //estados compartidos de context
  const [auth, setAuth] = useState(parseAuth);
  const [user, setUser] = useState(parseUser);
  const [loader, setLoader] = useState(false);
  const [areas, setAreas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const history = useHistory();

  const getDataUsers = async () => {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    if (response !== "/") {
      data = await database.getDataUser(response.uid);
    }
    if (data.exists) {
      handleValid(true, data._delegate._document.data.value.mapValue, true);
      setLoader(false);
      history.push("/home");
      console.log("reder true en app");
    } else {
      handleValid(false, { value: false }, false);
      setLoader(false);
      console.log("render false en app");
    }
  };

  const handleValid = (token, user, mode) => {
    localStorage.setItem("valid", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    if (mode) {
      setUser(user);
      setAuth(token);
    } else {
      setAuth(token);
      setUser(user);
    }
  };

  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    setLoader(true);
    history.push("/Loader");
    getDataUsers();
    history.push(route);
  };

  function getCurrentDate() {
    let date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var fullHour = `${hour}:${min}:${sec}`;
    var fullDate = `${dd}/${mm}/${yyyy}`;
    setFecha(fullDate);
    setHora(fullHour);
  }

  async function getFireStoreData(area) {
    let docPlantaRef = "fCD5Pe1enki9eJkwuRQH";
    let Data = await database.getData(docPlantaRef);
    const path = Data._delegate._document.data.value.mapValue.fields;
    let arrayAreas = path.areas.arrayValue.values;

    let arrayEquipos = [];
    if (area && area === "envase") {
      arrayEquipos = path.envase.arrayValue.values;
    } else if (area === "empaque") {
      arrayEquipos = path.empaque.arrayValue.values;
    } else if (area === "planta 4") {
      arrayEquipos = path.planta4.arrayValue.values;
    } else if (area === "planta 2") {
      arrayEquipos = path.planta2.arrayValue.values;
    } else if (area === "recubrimiento") {
      arrayEquipos = path.recubrimiento.arrayValue.values;
    } else if (area === "capsulas blandas") {
      arrayEquipos = path.capsulasBlandas.arrayValue.values;
    } else if (area === "tableteria") {
      arrayEquipos = path.tableteria.arrayValue.values;
    } else if (area === "mezclas secas") {
      arrayEquipos = path.mezclasSecas.arrayValue.values;
    } else if (area === "granulacion") {
      arrayEquipos = path.granulacion.arrayValue.values;
    } else if (area === "esteriles") {
      arrayEquipos = path.esteriles.arrayValue.values;
    }

    let equipos = arrayEquipos.map((element) => {
      return element.stringValue;
    });
    let areas = arrayAreas.map((element) => {
      return element.stringValue;
    });
    //console.log(path);
    setAreas(areas);
    setEquipos(equipos);
  }

  // window.addEventListener("popstate", (e) => {
  //   console.log(e);
  // });

  return (
    <AppContext.Provider
      value={{
        user,
        auth,
        loader,
        areas,
        equipos,
        fecha,
        hora,
        setUser,
        setAuth,
        setLoader,
        handleLogout,
        getDataUsers,
        getCurrentDate,
        getFireStoreData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
