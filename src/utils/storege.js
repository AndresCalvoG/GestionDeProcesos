import firebase from "firebase/app";
import "firebase/storage";

class Storage {
  //metodo para subir una foto de perfil
  async uploadProfilePhoto(company, photo, userID) {
    var storageRef = firebase
      .storage()
      .ref()
      .child(company + "/profilePhotos/" + userID + "/profile.jpeg");
    var file = photo;
    try {
      var result = await storageRef.put(file);
      let URL = await this.downloadDocument(
        "gs://gestion-de-procesoso-tq.appspot.com/" + result.task._ref.fullPath
      );
      return URL;
    } catch (error) {
      console.log(error);
    }
  }

  //Metodo para descargar y obtener url de un elemento de storage
  async downloadDocument(path) {
    var storage = firebase.storage();
    var gsReference = storage.refFromURL(path);
    try {
      let url = await gsReference.getDownloadURL();
      return url;
    } catch (error) {
      console.log(error);
    }
  }

  //Metodo par eliminar photo de perfile
  async deleteProfilePhoto(company, userID) {
    var storageRef = firebase
      .storage()
      .ref()
      .child(company + "/profilePhotos/" + userID + "/profile.jpeg");
    try {
      storageRef.delete();
      let url = await this.downloadDocument(
        "gs://gestion-de-procesoso-tq.appspot.com/profilePhotos/profile.png"
      );
      return url;
    } catch (error) {
      console.log(error);
    }
  }
  //metodo para subir foto de maquina
  async uploadMachinePhoto(company, photo, name) {
    var storageRef = firebase
      .storage()
      .ref()
      .child(company + "/Machines/" + name + ".jpeg");
    var file = photo;
    try {
      var result = await storageRef.put(file);
      let URL = await this.downloadDocument(
        "gs://gestion-de-procesoso-tq.appspot.com/" + result.task._ref.fullPath
      );
      return URL;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMachinePhoto(companyId, name) {
    var storageRef = firebase
      .storage()
      .ref()
      .child(companyId + "/Machines/" + name + ".jpeg");
    try {
      storageRef.delete();
    } catch (error) {
      console.log(error);
    }
  }
}

const storage = new Storage();
export default storage;
