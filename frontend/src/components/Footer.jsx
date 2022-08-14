import React from 'react';
import styles from '@styles/Footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles['footer-rows']}>
                <p>Filas por página 10</p>
            </div>
            <div className={styles['footer-order']}>
                <p>1-10 de 30 filas</p>
                <p>Arrows icon</p>
            </div>
        </footer>
    );
}

export default Footer;