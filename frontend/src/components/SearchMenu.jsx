import React from 'react';
import styles from '@styles/SearchMenu.module.scss';

const SearchMenu = () => {
    return (
        <div className={styles.SearchMenu}>
            <ul>
                <li>Nombre del contacto</li>
                <li>Cargo</li>
                <li>País/Región</li>
                <li>Compañía</li>
                <li>Canal favorito</li>
                <li>Interés</li>

            </ul>
        </div>
    );
}

export default SearchMenu;