import React, { useEffect, useState } from 'react';
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
            <div className="UsersList">
                {/* {users.map(user => (
                    // console.log(user)
                    <ul>
                        <li>{user.email}</li>
                    </ul>
                ))} */}
                {users.map(function(user, i) {
                    return  <ul key={i}>
                                <li key={i}>{user.email}</li>
                            </ul>
                })}
            </div>
        </section>
    );
}

export default Table;