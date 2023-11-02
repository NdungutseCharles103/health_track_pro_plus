import axios from 'axios';

const apiUrl = import.meta.env.PROD ? 'https://health-track-pro-plus.onrender.com/api' : 'http://localhost:3010/api';

export const api = axios.create({
   baseURL: apiUrl,
});
