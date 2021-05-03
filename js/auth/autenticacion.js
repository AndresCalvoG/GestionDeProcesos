
class Autenticacion{

    autEmailPass(email, password){

    }

    crearCuentaEmailPass(email, password, nombres){
        console.log(nombres,email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result =>{
            result.user.updateProfile({
                displayName: nombres
            })

            const configuracion = {
                url: 'https://andrescalvog.github.io/GestionDeProcesos/',
                handleCodeInApp: true,
            }
            //result.user.sendEmailVerification(configuracion)
            firebase.auth().sendSignInLinkToEmail(email, configuracion)
            .then(() =>{ 
                console.log('mensaje enviado')
            })
            .catch(error =>{
                console.error(error)
               // materialize.toast(error.message, 4000)
            })

            firebase.auth().signOut()
           // materialize.toast(`Bienvenido ${nombres}, debe realizar el proceso de verificacion`, 4000)
           console.log(`Bienvenido ${nombres}, debe realizar el proceso de verificacion`)
            //$('.modal').modal('close')
        })
        .catch(error =>{
            console.error(error)
           // materialize.toast(error.message, 4000)
        })
    }
}