import React from 'react';

import './styles/logstyle.css'

class Navbar extends React.Component{
    render(){
        return(
            <header className="header">
                <section className="header-title">
                    <h1>Gestion de Procesos</h1>
                </section>
            </header>
        )
    }
}

export default Navbar;