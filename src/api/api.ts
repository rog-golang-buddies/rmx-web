import axios from 'axios';

const { VITE_RMX_API_BASE } = import.meta.env;

export const api = axios.create({
    baseURL: VITE_RMX_API_BASE ?? 'http://localhost:8888/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});
