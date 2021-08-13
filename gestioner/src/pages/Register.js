import React, { useState } from 'react';

import firebase from "firebase/app";
import "firebase/firestore";

import './styles/register.css'
import Navbar from '../components/Navbar'
import Auth from '../utils/autenticacion'

const Register = () => {
    var db = firebase.firestore();

    const [contain, setContain] = useState(false)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cargo, setCargo] = useState("")
    const [code, setCode] = useState("")
    const [fault, setFault] = useState("")
    const nombres =`${nombre} ${apellido}`

    const dbUsers = async (props) =>{
        try{ 
            return(await db.collection("users").add(props))
        }catch(error){
            return(error.message)
        }
    }

    const handleRegister = async ()=> {       
        if(nombre === "" || apellido === "" || email === "" || password === "" || cargo === "" || code === "" ){
            setFault("Por favor completa TODOS los campos")
        }else{ 
            setFault("")
            const response = await Auth.crearCuentaEmailPass(email,password,nombres)
            
            if(response.code === "auth/wrong-password"){ 
                setFault("Contraseña Incorrecta")
            }else if(response.code === "auth/user-not-found"){ 
                setFault("Usuario Incorrecto")
            }else if(response.code === "auth/invalid-email"){
                setFault("Email invalido")
            }else if(response.code === "auth/weak-password"){
                setFault("Contraseña demasiado corta")
            }else if(response.code === "auth/email-already-in-use"){
                setFault("Email ya registrado")
            }else if(response === true){ 
                const result = await dbUsers({
                    first: nombre,
                    last: apellido,
                    email: email,
                    cargo: cargo,
                    code: code
                })
                console.log(result.id)
                setContain(true)
            }else{
                console.log(response.code)
            }
        }
    }

    return( 
        !contain? 
        <>
        <Navbar />
        <main className="main">
            <section className="form_register">
                <h1>Registro</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" placeholder="Tu nombre..." autoComplete="name" required
                        value={nombre} onChange={(e) => setNombre(e.target.value)} 
                    />
                    <input 
                        type="text" placeholder="Tu apellido..." autoComplete="apellido" required
                        value={apellido} onChange={(e) => setApellido(e.target.value)} 
                    />
                    <input 
                        type="email" placeholder="Tu correo..." autoComplete="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" placeholder="Contraseña..."  required 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                    />
                    <input 
                        type="text" placeholder="Cargo..." autoComplete="cargo" required
                        value={cargo} onChange={(e) => setCargo(e.target.value)} 
                    />
                    <input 
                        type="text" placeholder="Codigo de empleado..." autoComplete="code" required
                        value={code} onChange={(e) => setCode(e.target.value)} 
                    />
                    <span>{fault}</span>
                    <button className="send" onClick= {handleRegister}>Registrarme</button>
                </form>
            </section>
        </main> 
        </>: 
        <>
        <Navbar />
        <main className="main-success">
            <h1> Bienvenido </h1>
            <br/>
            <br/>
            <p className="names">{nombres.toLowerCase()
            .trim() 
            .split(' ')
            .map( v => v[0].toUpperCase() + v.substr(1) )
            .join(' ')}</p>
            <p> Debes realizar el proceso de verificacion desde el correo enviado a tu email </p>
        </main>
        </>
    )
}

export default Register