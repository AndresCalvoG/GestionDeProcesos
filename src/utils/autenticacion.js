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
  async authEmailPass(email, password) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user.emailVerified) {
        //console.log("ok verificado");
        return "/loader";
      } else {
        await firebase.auth().signOut();
        return "Por favor verifique email enviado";
      }
    } catch (error) {
      //console.log(error);
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
  async validUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          resolve(user);
        } else {
          try {
            await firebase.auth().signOut();
            //console.log("salida correcta");
            resolve("/");
          } catch (error) {
            console.log("no ha salido " + error);
            reject(error);
          }
        }
      });
    });
  }

  //Metodo para recetiar contraseña
  async resetPassword(email) {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return "Mensaje enviado";
    } catch (error) {
      console.log(error.code);
      return error.code;
    }
  }
}

const auth = new Autenticacion();
export default auth;
