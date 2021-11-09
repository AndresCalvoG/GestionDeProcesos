const salir = document.getElementById('logout')
const nombre = document.getElementById('name')

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      nombre.innerText = user.displayName
      console.log(user)
    } else {
      // User is signed out
      console.log(user)
        alert('Usuario no Autenticado')
        firebase.auth().signOut()
          .then(() => {
              console.log('salida correcta')
              //window.location.replace("../GestionDeProcesos")
              window.location.replace("./")
          })
          .catch(error =>{
              console.log('no ha salido')
          })
          window.location.replace("./")
    }
  });


salir.onclick = ()=> {
    firebase.auth().signOut()
    .then(() => {
        console.log('salida correcta')
        //window.location.replace("../GestionDeProcesos")
        window.location.replace("./")
    })
    .catch(error =>{
        console.log('no ha salido')
    })
}