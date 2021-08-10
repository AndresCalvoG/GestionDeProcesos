import React, { useState } from 'react';

import './styles/logstyle.css'
import userLogo from '../images/user.svg'
import Navbar from '../components/Navbar'
import Auth from '../utils/autenticacion'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fault, setFault] = useState("")

    const handleLogin = ()=> {
        if( email === "" || password === "" ){
            setFault("Por favor completa TODOS los campos")
        }else{
            setFault("")
            Auth.autEmailPass(email, password, (e)=>{
                if(e.code === "auth/wrong-password"){ 
                    setFault("Contraseña Incorrecta")
                }else if(e.code === "auth/user-not-found"){ 
                    setFault("Usuario Incorrecto")
                }
            })
        }
    };

    const imprimir = () =>{
        console.log('click')
    }

    return(
        <>
        <Navbar />
        <main className="main-container">
                <article className="main-container--logcard">
                    <figure className="logcard-image">
                        <img src={userLogo} alt="Logo Usuario" />
                    </figure>
                    <form className="logcard-form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email"  placeholder="Email" autoComplete="email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                            onClick = {imprimir}/>
                        <input 
                            type="password"  placeholder="Password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span>{fault}</span>
                        <div className="logcard-button">
                            <button onClick= {handleLogin}>Ingresar</button>
                            <a href="./registro.html"><button>Registrarme</button></a>
                        </div>
                    </form>
                    
                </article>
        </main>
        </>
    )
    
}

export default Login;