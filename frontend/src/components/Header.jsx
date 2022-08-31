import React from 'react';
import { useAuth } from '@hooks/useAuth';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

const Header = () => {
    // const auth = useAuth();
    const role = "admin";
    console.log(role)
    return (
        <>
            <header className={styles.Header}>
                <Link href='/'><a>Logo</a></Link>
                <ul className={styles.links}>
                <Link href='/'><a className={styles['links-item']}>Contactos</a></Link>
                    <Link href='/companies'><a className={styles['links-item']}>Compañías</a></Link>
                    {/* {isAdmin && <Link href='/users'><a className={styles['links-item']}>Usuarios</a></Link> } */}
                    {role === "admin" ? <Link href='/users'><a className={styles['links-item']}>Usuarios</a></Link> : null}
                    <Link href='/regions'><a className={styles['links-item']}>Región/Ciudad</a></Link>
                </ul>
            </header>
        </>  
    );
}

export default Header;