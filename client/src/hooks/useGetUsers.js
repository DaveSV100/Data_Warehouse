import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetUsers = (API) => {
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        const response = await axios(API);
        setUsers(response.data);
    }, []);
    return users;
}

export default useGetUsers;