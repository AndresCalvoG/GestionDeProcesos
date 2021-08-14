import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './styles/homeStyles.css'
import user from '../images/user.svg'
import pdf from '../images/pdf.png'
import machines from '../images/maquina.png'
import calendar from '../images/calendar.png'
import help from '../images/help.png'
import schedule from '../images/turnos.png'
import binnacle from '../images/Bitacora.jpg'
import passwords from '../images/password.svg'

import Auth from '../utils/autenticacion'

const Home = () => {
    return(
        <>
        <main class="main-container">
            <section class="main-container--menu">

                <article class="main-container--card" id="logout">
                <h2>Logout</h2>
                <div class="main-container--image">
                    <img onmousemove="bigImg(this)" 
                        onmouseout="normalImg(this)" 
                        src={user} 
                        alt="Cerrar Sesion"/>
                </div>
                </article>

                <article class="main-container--card">
                    <h2>Manuales</h2>
                    <div>
                        <Link to="./assets/Manuales/manuales.html">
                            <img onmousemove="bigImg(this)" 
                                onmouseout="normalImg(this)" 
                                src={pdf} 
                                alt="Manuales en pdf"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Maquinas</h2>
                    <div>
                        <Link to="./assets/Maquinas/Maquinas.html">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={machines}
                            alt="listado de maquinas"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Calendario</h2>
                    <div>
                        <Link to="./assets/calendario/calendario.html">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={calendar} 
                            alt="calendario"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Ayuda</h2>
                    <div>
                        <Link to="./assets/Help/Help.html">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={help} 
                            alt="help"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Turnos</h2>
                    <div>
                        <Link to="./assets/Turnos/Turnos.html">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={schedule}
                            alt="turnos de trabajo"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Bitacora</h2>
                    <div>
                        <Link to="./assets/Bitacora\Bitacora.html">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={binnacle} 
                            alt="Bitacora de trabajo"/>
                        </Link>
                    </div>
                </article>

                <article class="main-container--card">
                    <h2>Contraseñas</h2>
                    <div>
                        <Link to="./">
                            <img onmousemove="bigImg(this)" 
                            onmouseout="normalImg(this)" 
                            src={passwords} 
                            alt="Contraseñas"/>
                        </Link>
                    </div>
                </article>
            </section>
        </main>
        </>
    )
}

export default Home
