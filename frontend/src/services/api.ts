import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers['x-auth-token'] = token;
    }
    return req;
});

export const loginWithLastName = (examNumber: string, lastName: string) =>
    API.post('/auth/login-lastname', { examNumber, lastName });

export const loginWithPassword = (examNumber: string, password: string) =>
    API.post('/auth/login-password', { examNumber, password });

export const setPassword = (password: string) =>
    API.post('/auth/set-password', { password });

export const getClearanceData = () =>
    API.get('/student/clearance');

export const getDashboardStats = () =>
    API.get('/stats/dashboard');

export default API;