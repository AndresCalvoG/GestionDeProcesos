import firebase from "firebase/app";
import "firebase/storage";

class Storage {
  uploadProfilePhoto(photo) {
    var storageRef = firebase
      .storage()
      .ref()
      .child("profilePhotos/profile.jpeg");
    var file = photo;
    console.log(photo);
    try {
      storageRef.put(file);
    } catch (error) {
      console.log(error);
    }
    //console.log(storageRef);
  }
}

const storage = new Storage();
export default storage;
