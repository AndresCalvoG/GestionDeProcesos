import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";
import userProfile from "../images/profile.png";

const AppContext = React.createContext();

function AppProvider(props) {
  //notificador
  const [newNotify, setNewNotify] = useState([
    {
      values: {
        fecha: { stringValue: "" },
        anomalia: { stringValue: "" },
        equipo: { stringValue: "" },
      },
      id: "",
    },
  ]);
  const [update, setUpdate] = useState(false);

  //algoritmo para local storege
  const authenticated = localStorage.getItem("valid");
  const userActive = localStorage.getItem("user");
  const URLphoto = localStorage.getItem("PhotoUrl");
  let parseAuth = JSON.parse(authenticated);
  let parseUser = JSON.parse(userActive);
  let parsePhoto = JSON.parse(URLphoto);

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
  if (!URLphoto) {
    localStorage.setItem("PhotoUrl", JSON.stringify(userProfile));
    parsePhoto = userProfile;
  } else {
    parsePhoto = JSON.parse(URLphoto);
  }
  //estados compartidos de context
  const [auth, setAuth] = useState(parseAuth);
  const [user, setUser] = useState(parseUser);
  const [loader, setLoader] = useState(false);
  const [areas, setAreas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [partes, setPartes] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [photoUrl, setPhotoUrl] = useState(parsePhoto);
  const history = useHistory();

  const getDataUsers = async () => {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    //console.log(response); // informacion de usuario de autenticacion
    if (response !== "/") {
      data = await database.getDataUser(response.uid);
    }
    if (data.exists) {
      handleValid(
        true,
        data._delegate._document.data.value.mapValue,
        true,
        response.photoURL
      );
      setLoader(false);
      history.replace("/home");
      console.log("reder true en app");
    } else {
      handleValid(false, { value: false }, false, userProfile);
      setLoader(false);
      console.log("render false en app");
    }
  };

  const handleValid = (token, user, mode, photo) => {
    localStorage.setItem("valid", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("PhotoUrl", JSON.stringify(photo));
    if (mode) {
      setUser(user);
      setAuth(token);
      setPhotoUrl(photo);
    } else {
      setAuth(token);
      setUser(user);
      setPhotoUrl(photo);
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

  async function getFireStoreData(area, equipo) {
    let docPlantaRef = "fCD5Pe1enki9eJkwuRQH";
    let Data = await database.getData(docPlantaRef);
    const path = Data._delegate._document.data.value.mapValue.fields;
    let arrayAreas = path.areas.arrayValue.values;
    let arrayEquipos = [];
    let arrayPartes = [];

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

    if (area && equipo === "blister 3") {
      arrayPartes = path.blister3.arrayValue.values;
    } else {
      arrayPartes = [];
    }

    let equipos = arrayEquipos.map((element) => {
      return element.stringValue;
    });
    let areas = arrayAreas.map((element) => {
      return element.stringValue;
    });
    let partes = arrayPartes.map((element) => {
      return element.stringValue;
    });
    //console.log(path);
    setAreas(areas);
    setEquipos(equipos);
    setPartes(partes);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        auth,
        loader,
        areas,
        equipos,
        partes,
        fecha,
        hora,
        newNotify,
        update,
        photoUrl,
        setNewNotify,
        setUser,
        setAuth,
        setLoader,
        setUpdate,
        setPhotoUrl,
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
