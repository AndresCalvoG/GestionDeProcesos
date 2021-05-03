
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
            // firebase.auth().sendSignInLinkToEmail(email, configuracion)
            // .then(() =>{ 
            //     console.log('mensaje enviado') 
            // })
            // .catch(error =>{
            //     console.error(error)
            //    // materialize.toast(error.message, 4000)
            // })

            firebase.auth().signOut()
           // materialize.toast(`Bienvenido ${nombres}, debe realizar el proceso de verificacion`, 4000)
            let container = document.getElementById('contain');
            let body = document.getElementById('body');
            container.innerHTML="";
            container.style.justifyContent = "center"
            container.style.textAlign = "center"
            body.style.color = "#999999"
            container.innerHTML = `
                  <h1> Bienvenido </h1>
                  <br>
                  <br>
                  <p>${nombres}</p>
                  <p> Debes realizar el proceso de verificacion desde el correo enviado a tu email </p>
             `;

           console.log(`Bienvenido ${nombres}, debe realizar el proceso de verificacion`)
            //$('.modal').modal('close')
        })
        .catch(error =>{
            console.error(error)
           // materialize.toast(error.message, 4000)
        })
    }
}