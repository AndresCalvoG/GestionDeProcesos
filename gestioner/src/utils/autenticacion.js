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
    async autEmailPass(email, password){
        try{ 
            const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            if(result.user.emailVerified){
                console.log('ok verificado')
                return('ok')
            }else{
                await firebase.auth().signOut()
                return('Por favor verifique email enviado')
            }
        }catch(error){
            return(error)
        }
    }
    
// metodo para crear un usuario nuevo en firebase
    async crearCuentaEmailPass(email, password, nombres){
        try{ 
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
            result.user.updateProfile({
                displayName: nombres
            });
            const configuracion = {
                url: 'https://andrescalvog.github.io/GestionDeProcesos/',
                handleCodeInApp: true,
            }
            try{
                result.user.sendEmailVerification(configuracion)
                await firebase.auth().sendSignInLinkToEmail(email, configuracion)
                console.log("Email de verificacion enviado")
            }catch(error){
                console.log(error)
            }
            await firebase.auth().signOut()
            console.log("signOut Done")
            return(true)
        }catch(error){
            return(error)
        }
    }
}

const auth = new Autenticacion()
export default auth