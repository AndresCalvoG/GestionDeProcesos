// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./ConfigFirebase";

class Autenticacion {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  // Metodo para autenticacion con correo y contraseña
  async autEmailPass(email, password) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user.emailVerified) {
        //console.log("ok verificado");
        return "/home";
      } else {
        await firebase.auth().signOut();
        return "Por favor verifique email enviado";
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // metodo para crear un usuario nuevo en firebase
  async crearCuentaEmailPass(email, password, nombres) {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      result.user.updateProfile({
        displayName: nombres,
      });
      const configuracion = {
        url: "https://andrescalvog.github.io/GestionDeProcesos/",
        handleCodeInApp: true,
      };
      try {
        result.user.sendEmailVerification(configuracion);
        await firebase.auth().sendSignInLinkToEmail(email, configuracion);
        //console.log("Email de verificacion enviado");
      } catch (error) {
        console.log(error);
      }
      await firebase.auth().signOut();
      console.log("signOut Done");
      //console.log(result.user.uid);
      return result.user;
    } catch (error) {
      return error;
    }
  }

  //Metodo para enviar datos obtenidos a firestore database
  async crearUsersDb(props) {
    var db = firebase.firestore();
    try {
      await db.collection("users").doc(props.id).set(props);
    } catch (error) {
      return error.message;
    }
  }

  // Metodo para obtener datos de firestore
  async getDataUser(props) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("users").doc(props).get();
      return docRef;
    } catch (error) {
      console.log(error);
    }
  }

  //Metodo para logout de usuario
  async logoutUsers() {
    try {
      await firebase.auth().signOut();
      //console.log("salida correcta");
      return "/";
    } catch (error) {
      console.log("no ha salido");
      return error;
    }
  }

  //Metodo que valida usuario registrado
  validUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          resolve(user);
        } else {
          //alert("Usuario no Autenticado");
          try {
            await firebase.auth().signOut();
            console.log("salida correcta");
            resolve("/");
          } catch (error) {
            console.log("no ha salido " + error);
            reject(error);
          }
        }
      });
    });
  }
}

const auth = new Autenticacion();
export default auth;
