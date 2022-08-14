import React from 'react';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={styles.Header}>
                <Link href='/'><a>Logo</a></Link>
                <ul className={styles.links}>
                <Link href='/'><a className={styles['links-item']}>Contactos</a></Link>
                    <Link href='/companies'><a className={styles['links-item']}>Compañías</a></Link>
                    <Link href='/users'><a className={styles['links-item']}>Usuarios</a></Link>
                    <Link href='/region'><a className={styles['links-item']}>Región/Ciudad</a></Link>
                </ul>
            </header>
        </>  
    );
}

export default Header;