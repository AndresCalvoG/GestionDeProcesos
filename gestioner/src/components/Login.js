import React from 'react';

import './styles/logstyle.css'
import userLogo from '../images/user.svg'

class Login extends React.Component{
    render(){
        return(
            <main className="main-container">
                <div className="logcard-input-msg" id='content'><p id="msj"></p></div>
                <section className="main-container--log">
                    <article className="main-container--logcard">
                        <div className="logcard-image">
                            <img src={userLogo} alt="Logo Usuario" />
                        </div>
                        <div className="logcard-input">
                            <form className="logcard-form" action="">
                                <input type="email" id="user" placeholder="Email" autoComplete="email" required />
                                <input type="password" id="pass" placeholder="Password" required />
                                <span id="error"></span>
                            </form>
                        </div>
                        <div className="logcard-button">
                            <button id="loggin">Ingresar</button>
                            <a href="./registro.html"><button>Registrarme</button></a>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}

export default Login;