import React, { useState } from 'react';

import './styles/navStyle.css'
import userProfile from '../images/profile.png'

const Navbar = () =>{
    const [contain, setContain] = useState(true)

    return(
        !contain?
        <>
        <header className="header">
            <section className="header-title">
                <h1>Gestion de Procesos</h1>
            </section>
        </header>
        </>:
        <>
        <header class="main-header">
            <section class="main-header-title">
                <h1 class='title-mobile'>GP</h1>
                <h1 class='title-desk'>Gestion de Procesos</h1>
            </section>
            <section class="main-header-avatar">
                <div class='avatar-info'>
                    <p id="name">Andres felipe calvo gomez</p>
                    <p id="cargo">Tec. Electronico</p>
                    <p id="codigo">cod. 19939</p>
                </div>
                <figure class="avatar">
                    <img id="photo" src={userProfile} alt="avatar" />
                </figure>
            </section>
        </header>
        </>
    )
}

export default Navbar;