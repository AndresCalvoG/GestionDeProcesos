import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  constructor() {
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
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
}

const database = new Database();
export default database;
