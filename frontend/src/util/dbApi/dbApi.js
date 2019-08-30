import axios from 'axios';

export const test = (userData) => {
    return axios.post('/api/form/new', userData);
};
