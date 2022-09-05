import axios from 'axios';
import endPoints from '@services/api';

const addCountry = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.countries.postCountries, body, config);
    return response.data;
}

const updateCountry = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.countries.putCountries, body, config);
    return response.data;
}

const deleteCountry = async (id) => {
    const response = await axios.delete(endPoints.countries.deleteCountry(id));
    return response.data;
}

export { addCountry, updateCountry, deleteCountry };