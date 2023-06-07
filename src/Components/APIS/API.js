import axios from "axios"


const USERAPI = axios.create({ baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events' })

// USERAPI.interceptors.request.use(
//     async config => {
//         const token = localStorage.getItem(`token`);
//         config.headers['x-api-key'] = `PAC-TRUSTEES`;
//         config.headers['x-access-token'] = JSON.parse(token)
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     },
// );

export const fetchAdmin = () => USERAPI.get('/');
export const createAdmin = (newAdmin) => USERAPI.post('/', newAdmin);
export const updateAdmin = (id, updatedAdmin) => USERAPI.put(`/${id}`, updatedAdmin);
export const deleteAdmin = (id) => axios.delete(`/${id}`);