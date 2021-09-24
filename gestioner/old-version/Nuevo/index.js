window.addEventListener("load", function () {
  var firebaseConfig = {
    apiKey: "AIzaSyA5sY9N_TINZNrnelG1KSdd4812cBn-O_c",
    authDomain: "gestion-de-procesoso-tq.firebaseapp.com",
    databaseURL: "https://gestion-de-procesoso-tq.firebaseio.com",
    projectId: "gestion-de-procesoso-tq",
    storageBucket: "gestion-de-procesoso-tq.appspot.com",
    messagingSenderId: "156651852513",
    appId: "1:156651852513:web:e481bf0026651f271e9da0",
    measurementId: "G-YVPPSWK58L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  let no1 = this.document.querySelector('#no1');

  document.querySelector('#btn').addEventListener('click', function () {

    let obj = {};
    obj.no1 = no1.value;
    console.log(obj)

    db.collection("Bitacora").doc('Item2').set(obj)
      .then(function (docRef) {
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
});