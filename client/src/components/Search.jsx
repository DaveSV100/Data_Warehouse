import React, { useState } from 'react';
import SearchMenu from './SearchMenu';
import '@styles/search.scss';
import menu from '@images/menu.png'

const Search = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='Search'>
            <h2>Contactos</h2>
            <input type="text" />
            <img className='menuIcon' onClick={handleToggle} src={menu} alt="Mostrar menú de búsqueda" />
            {/* {toggle ? <SearchMenu />: ""} */}
            {toggle && <SearchMenu />}
        </div>        
    );
}

export default Search;
