import React, { useState, useContext } from 'react';
import Image from 'next/image';
import SearchMenu from './SearchMenu';
import AppContext from '@context/AppContext'
import menu from '@images/menu.png'
import search from '@images/search.png'
import ContactModal from '../common/ContactModal';
import styles from '@styles/Search.module.scss';




const Search = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className={styles.search}>
            <h2>Contactos</h2>
            <input className={styles.searchBox} type="text" />
            {/* <div className={styles.menuContainer}> */}
                {/* <Image onClick={handleToggle} src={menu} alt="Mostrar menú de búsqueda" width={30} height={30} className={styles.menuIcon} /> */}
            {/* </div> */}
            <img onClick={handleToggle} src={menu.src} alt="Mostrar menú de búsqueda" className={styles.menuIcon} />
            {/* {toggle ? <SearchMenu />: ""} */}
            {/* <button className={styles.searchButton} type="submit"><Image src={search} alt="Buscar selección" width={25} height={25} className={styles['searchButton-img']} /></button> */}
            <button className={styles.searchButton} type="submit"><img src={search.src} alt="Buscar selección" className={styles['searchButton-img']} /></button>
            {state.selection.length > 0 ? <div>{state.selection.length}</div> : null }
            {toggle && <SearchMenu />}
            <ContactModal />
        </div>        
    );
}



export default Search;