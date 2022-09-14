import axios from 'axios';
import endPoints from '@services/api';

const addCompany = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.companies.postCompanies, body, config);
    return response.data;
}

const updateCompany = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.companies.putCompanies, body, config);
    return response.data;
}

const deleteCompany = async (id) => {
    const response = await axios.delete(endPoints.companies.deleteCompany(id));
    return response.data;
}

export { addCompany, updateCompany, deleteCompany };