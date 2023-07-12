import axios from 'axios'

// user
const USERAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchUsers = () => USERAPI.get('/');
export const fetchSingleUser = (id) => USERAPI.get(`/${id}`);
export const createUser = (newUser) => USERAPI.post('/', newUser);
export const updateUser = (id, updatedUser) => USERAPI.put(`/${id}`, updatedUser);
export const deleteUser = (id) => USERAPI.delete(`/${id}`);

// kyc
const KYCAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchUserKYC = () => KYCAPI.get('/');
export const fetchSingleUserKYC = (id) => KYCAPI.get(`/${id}`);
export const createUserKYC = (newKYC) => KYCAPI.post('/', newKYC);
export const updateUserKYC = (id, updatedKYC) => KYCAPI.put(`/${id}`, updatedKYC);
export const deleteUserKYC = (id) => KYCAPI.delete(`/${id}`);

// creator
const WITHDRAWALAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchUserWithdrawal = () => WITHDRAWALAPI.get('/');
export const fetchSingleUserWithdrawal = (id) => WITHDRAWALAPI.get(`/${id}`);
export const createUserWithdrawal = (newUserWithdrawal) => WITHDRAWALAPI.post('/', newUserWithdrawal);
export const updateUserWithdrawal = (id, updatedUserWithdrawal) => WITHDRAWALAPI.put(`/${id}`, updatedUserWithdrawal);
export const deleteUserWithdrawal = (id) => WITHDRAWALAPI.delete(`/${id}`);
