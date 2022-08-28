import axios from 'axios';
import endPoints from '@services/api';

const addContact = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.users.postUsers, body, config);
    return response.data;
}

const addUser = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.users.postUsers, body, config);
    return response.data;
}

const deleteContact = async (id) => {
    const response = await axios.delete(endPoints.users.deleteUsers(id));
    return response.data;
}

export { addContact, addUser, deleteContact };