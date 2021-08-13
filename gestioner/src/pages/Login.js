import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './styles/logstyle.css'
import userLogo from '../images/user.svg'
import Navbar from '../components/Navbar'
import Auth from '../utils/autenticacion'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fault, setFault] = useState("")

    const handleLogin = async ()=> {
        if( email === "" || password === "" ){
            setFault("Por favor completa todos los campos")
        }else{
            setFault("")
            const response = await Auth.autEmailPass(email, password)
            
            if(response.code === "auth/wrong-password"){ 
                setFault("Contraseña Incorrecta")
            }else if(response.code === "auth/user-not-found"){ 
                setFault("Usuario Incorrecto")
            }else{
                setFault(response)
            }
        }
    }

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
                            <Link to="/register"><button>Registrarme</button></Link>
                        </div>
                    </form>
                    
                </article>
        </main>
        </>
    )
    
}

export default Login;