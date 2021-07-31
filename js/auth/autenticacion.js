
class Autenticacion{

    autEmailPass(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            if(result.user.emailVerified){
                console.log('ok verificado')
                window.location.replace("https://andrescalvog.github.io/GestionDeProcesos/home.html")
            }else{
                firebase.auth().signOut()
                alert('Por favor verifique su email')
                //console.log('debe revisar email')
            }
        })
        .catch(error =>{
             
             error.code === "auth/wrong-password"?alert('Contraseña Incorrecta'):
            // console.log(error.message)
            alert(error.message)  //error de autenticacion
        })
    }

    crearCuentaEmailPass(email, password, nombres){
        //console.log(nombres,email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result =>{
            result.user.updateProfile({
                displayName: nombres
            })

            const configuracion = {
                url: 'https://andrescalvog.github.io/GestionDeProcesos/',
                handleCodeInApp: true,
            }
            result.user.sendEmailVerification(configuracion)
            firebase.auth().sendSignInLinkToEmail(email, configuracion)
            .then(() =>{ 
                console.log('mensaje enviado') 
            })
            .catch(error =>{
                console.error(error)
              
            })

            firebase.auth().signOut()
           
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
            
        })
        .catch(error =>{
            alert(error.message)
            //console.error(error)
           
        })
    }
}