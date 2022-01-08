import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  const adminEmail = "elprogramador94@gmail.com";
  const adminPass = "123456";
  const UserProfile =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/profilePhotos%2Fprofile.png?alt=media&token=b4bd3414-7c8f-4b08-bff9-9e46b113e884";
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
  const lnameCompany = localStorage.getItem("nameCompany");
  let parseAuth = JSON.parse(authenticated);
  let parseUser = JSON.parse(userActive);
  let parsePhoto = JSON.parse(URLphoto);
  let parseNameCompany = JSON.parse(lnameCompany);

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
    localStorage.setItem("PhotoUrl", JSON.stringify(UserProfile));
    parsePhoto = UserProfile;
  } else {
    parsePhoto = JSON.parse(URLphoto);
  }
  if (!lnameCompany) {
    localStorage.setItem("nameCompany", JSON.stringify(" "));
    parseNameCompany = " ";
  } else {
    parseNameCompany = JSON.parse(lnameCompany);
  }
  //estados compartidos de context
  const [companyID, setCompanyID] = useState("");
  const [nameCompany, setNameCompany] = useState(parseNameCompany);
  const [auth, setAuth] = useState(parseAuth);
  const [user, setUser] = useState(parseUser);
  const [areas, setAreas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [partes, setPartes] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [photoUrl, setPhotoUrl] = useState(parsePhoto);
  const history = useHistory();

  async function getDataUsers() {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    //console.log(response); // informacion de usuario de autenticacion
    if (response !== "/") {
      data = await database.getDataUser(response.uid);
      var nameC = await database.getNameCompany(
        data._delegate._document.data.value.mapValue.fields.company.stringValue
      );
    }
    if (data.exists) {
      handleValid(
        true,
        data._delegate._document.data.value.mapValue,
        true,
        response.photoURL,
        nameC
      );
      history.replace("/home");
    } else {
      handleValid(false, { value: false }, false, UserProfile, " ");
    }
  }

  const handleValid = (token, user, mode, photo, name) => {
    localStorage.setItem("valid", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("PhotoUrl", JSON.stringify(photo));
    localStorage.setItem("nameCompany", JSON.stringify(name));
    if (mode) {
      setUser(user);
      setAuth(token);
      setPhotoUrl(photo);
      setNameCompany(name);
    } else {
      setAuth(token);
      setUser(user);
      setPhotoUrl(photo);
      setNameCompany(name);
    }
  };

  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
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

  async function updateFireStoreData(id) {
    let Data = await database.getData(id);
  }

  return (
    <AppContext.Provider
      value={{
        adminEmail,
        adminPass,
        companyID,
        nameCompany,
        user,
        auth,
        areas,
        equipos,
        partes,
        fecha,
        hora,
        newNotify,
        update,
        photoUrl,
        setCompanyID,
        setNewNotify,
        setUser,
        setAuth,
        setUpdate,
        setPhotoUrl,
        handleLogout,
        getDataUsers,
        getCurrentDate,
        updateFireStoreData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
