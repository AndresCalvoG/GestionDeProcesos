const salir = document.getElementById('logout')

salir.onclick = ()=> {

    firebase.auth().signOut()
    .then(() => {
        console.log('salida correcta')
        window.location.replace("../..")
        // window.location.replace("https://andrescalvog.github.io/GestionDeProcesos/")
    })
    .catch(error =>{
        console.log('no ha salido')
    })

};