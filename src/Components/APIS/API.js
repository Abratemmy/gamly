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
export const deleteAdmin = (id) => USERAPI.delete(`/${id}`);


// payout url https://dummy.restapiexample.com/api/v1/employee/${id}
const PAYMENTAPI = axios.create({ baseURL: 'https://fakestoreapi.com/products' })
export const fetchPayment = () => PAYMENTAPI.get('/');
export const fetchsinglepayout = (id) => PAYMENTAPI.get(`/employee/${id}`);


// PAGE MANAGEMENT
const PAGEAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchPage = () => PAGEAPI.get('/');
export const createPage = (newPage) => PAGEAPI.post('/', newPage);
export const updatePage = (id, updatedPage) => PAGEAPI.put(`/${id}`, updatedPage);
export const deletePage = (id) => PAGEAPI.delete(`/${id}`);