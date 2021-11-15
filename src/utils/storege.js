import firebase from "firebase/app";
import "firebase/storage";

class Storage {
  async uploadProfilePhoto(photo, userID) {
    var storageRef = firebase
      .storage()
      .ref()
      .child("profilePhotos/" + userID + "/profile.jpeg");
    var file = photo;
    try {
      var result = await storageRef.put(file);
      // result.On(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      //   var progress = (snapshot.bytesTrasnferred / snapshot.totalBytes) * 100;
      //   console.log(progress);
      // });
      let URL = await this.downloadProfilePhoto(
        "gs://gestion-de-procesoso-tq.appspot.com/" + result.task._ref.fullPath
      );
      return URL;
    } catch (error) {
      console.log(error);
    }
  }

  async downloadProfilePhoto(path) {
    var storage = firebase.storage();
    var gsReference = storage.refFromURL(path);
    try {
      let url = await gsReference.getDownloadURL();
      return url;
    } catch (error) {
      console.log(error);
    }
  }
}

const storage = new Storage();
export default storage;
