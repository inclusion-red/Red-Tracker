import axios from 'axios';

export const createForm = (userData) => {
    return axios.post('/api/form/new', userData);
};
