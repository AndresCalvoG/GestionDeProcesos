import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
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
      return {
        value: "0",
        exists: false,
      };
    }
  }
  //MEtodo para obtener Areas de base de datos
  async getDataAreas() {
    var db = firebase.firestore();
    try {
      var docAreas = await db.collection("areas").doc(props).get();
      return docAreas;
    } catch (error) {
      console.log(error);
      return {
        value: "0",
        exists: false,
      };
    }
  }
}

const database = new Database();
export default database;
