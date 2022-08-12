import React, { useState, useContext } from 'react';
import SearchMenu from './SearchMenu';
import '@styles/search.scss';
import menu from '@images/menu.png'
import AppContext from '../context/AppContext'
import search from '@images/search.png'

const Search = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='Search'>
            <h2>Contactos</h2>
            <input className='searchBox' type="text" />
            <img className='menuIcon' onClick={handleToggle} src={menu} alt="Mostrar menú de búsqueda" />
            {/* {toggle ? <SearchMenu />: ""} */}
            <button className='searchButton' type="submit"><img src={search} alt="Buscar selección" /></button>
            {state.selection.length > 0 ? <div>{state.selection.length}</div> : null }
            {toggle && <SearchMenu />}
        </div>        
    );
}

export default Search;