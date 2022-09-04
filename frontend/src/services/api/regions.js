import axios from 'axios';
import endPoints from '@services/api';

const addRegion = async(body) => {
    const config = {
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.regions.postRegions, body, config);
    return response.data;
}

const deleteRegion = async (id) => {
    const response = await axios.delete(endPoints.regions.deleteRegion(id));
    return response.data;
}

export { addRegion, deleteRegion };