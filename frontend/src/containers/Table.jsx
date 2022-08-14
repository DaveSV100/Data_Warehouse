import React, { useState, useContext } from 'react';
import useGetUsers from '@hooks/useGetUsers';
import User from '@components/User';
import styles from '@styles/Table.module.scss';


const API = 'http://127.0.0.1:3001/users'

const Table = () => {
    const users = useGetUsers(API);

    return (
        <section className={styles['main-container']}>
            <div className={styles.titles}>
                <ul>
                    <li><input type="checkbox" /></li>
                    <li>Contacto</li>
                    <li>País/Región</li>
                    <li>Compañía</li>
                    <li>Cargo</li>
                    <li>Canal preferido</li>
                    <li>Interés</li>
                    <li>Acciones</li>
                </ul>
            </div>
            <div className={styles.UsersList}>
                {/* {users.map(user => (
                    // console.log(user)
                    <ul>
                        <li>{user.email}</li>
                    </ul>
                ))} */}
                {/* {users.map(function(user, i) {
                    return <p key={i}>{user.email}</p>
                            
                })} */}
                
                {users.map(data => (
                    <User userData={data} key={data.ID} />
                ))
                }
            </div>
        </section>
    );
}

export default Table;