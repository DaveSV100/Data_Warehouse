import React, { useEffect, useState } from 'react';
import '@styles/table.scss'
import User from '@components/User';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/users'

const Table = () => {
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        const response = await axios(API);
        setUsers(response.data);
    }, [])
    return (
        <section className='main-container'>
            <div className="titles">
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
            <div className="UsersList">
                {/* {users.map(user => (
                    // console.log(user)
                    <ul>
                        <li>{user.email}</li>
                    </ul>
                ))} */}
                {users.map(function(user, i) {
                    return <p key={i}>{user.email}</p>
                            
                })}
            </div>
        </section>
    );
}

export default Table;