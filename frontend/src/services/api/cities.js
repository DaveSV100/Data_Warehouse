import axios from 'axios';
import endPoints from '@services/api';

const addCity = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.cities.postCities, body, config);
    return response.data;
}

const updateCity = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.cities.putCities, body, config);
    return response.data;
}

const deleteCity = async (id) => {
    const response = await axios.delete(endPoints.cities.deleteCity(id));
    return response.data;
}

export { addCity, updateCity, deleteCity };