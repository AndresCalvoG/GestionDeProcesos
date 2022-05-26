// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./ConfigFirebase";
import storage from "../utils/storege";

class Autenticacion {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  // Metodo para autenticacion con correo y contraseña
  async authEmailPass(email, password) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(result);
      if (result.user.emailVerified) {
        return true;
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
      const imgDefault = await storage.downloadDocument(
        "gs://gestion-de-procesoso-tq.appspot.com/profilePhotos/profile.png"
      );
      result.user.updateProfile({
        displayName: nombres,
        photoURL: imgDefault,
      });
      const configuracion = {
        url: "https://andrescalvog.github.io/GestionDeProcesos/",
        handleCodeInApp: true,
      };
      try {
        result.user.sendEmailVerification(configuracion);
        await firebase.auth().sendSignInLinkToEmail(email, configuracion);
      } catch (error) {
        console.log(error);
      }
      await firebase.auth().signOut();
      return result.user;
    } catch (error) {
      return error;
    }
  }

  //Metodo para actualizar foto
  async updatePhoto(user, photo) {
    //console.log(user);
    try {
      user.updateProfile({
        photoURL: photo,
      });
      //console.log("foto enviada");
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

const Auth = new Autenticacion();
export default Auth;
