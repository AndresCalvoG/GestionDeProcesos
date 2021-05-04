const salir = document.getElementById('logout')

salir.onclick = ()=> {

    firebase.auth().signOut()
    .then(() => {
        console.log('salida correcta')
        window.location.replace("/index.html")
    })
    .catch(error =>{
        console.log('no ha salido')
    })

};