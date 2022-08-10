import React from 'react';
import '@styles/header.scss'

const Header = () => {
    return (
        <div>
            <header>
                <h1>Logo</h1>
                <ul>
                    <li><a href="">Contactos</a></li>
                    <li><a href="">Compañías</a></li>
                    <li><a href="">Usuarios</a></li>
                    <li><a href="">Región/Ciudad</a></li>
                </ul>
            </header>
        </div>  
    );
}

export default Header;