// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from "./ConfigFirebase";

class Autenticacion{
    constructor(props){
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }
// Metodo para autenticacion con correo y contraseña
    autEmailPass(email, password, onError){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            if(result.user.emailVerified){
                //console.log('ok verificado')
                //window.location.replace("./home.html")
                //window.location.replace("https://andrescalvog.github.io/GestionDeProcesos/home.html")
            }else{
                firebase.auth().signOut()
                alert('Por favor verifique su email')
            }
        })
        .catch(error =>{
            onError(error)
        })
    }
    
// metodo para crear un usuario nuevo en firebase
    crearCuentaEmailPass(email, password, nombres, check){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result =>{
            console.log(result)
            result.user.updateProfile({
                displayName: nombres
            });
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
            check()
        })
        .catch(error =>{
            alert(error.message)
        });
    }
}

const auth = new Autenticacion()
export default auth