import axios from 'axios'

// code Management
const CODEMANAGEMENTAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchCodeManagement = () => CODEMANAGEMENTAPI.get('/');
export const createCodeManagement = (newCodeManagement) => CODEMANAGEMENTAPI.post('/', newCodeManagement);
export const updateCodeManagement = (id, updatedCodeManagement) => CODEMANAGEMENTAPI.put(`/${id}`, updatedCodeManagement);
export const deleteCodeManagement = (id) => CODEMANAGEMENTAPI.delete(`/${id}`);

// creator
const CREATORSAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchCreators = () => CREATORSAPI.get('/');
export const fetchSingleCreator = (id) => CREATORSAPI.get(`/${id}`);
export const createCreator = (newCreator) => CREATORSAPI.post('/', newCreator);
export const updateCreator = (id, updatedCreator) => CREATORSAPI.put(`/${id}`, updatedCreator);
export const deleteCreator = (id) => CREATORSAPI.delete(`/${id}`);

// game metrics
const GAMEMETRICAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchGameMetrics = () => GAMEMETRICAPI.get('/');
export const fetchSingleGameMetric = (id) => GAMEMETRICAPI.get(`/${id}`);
export const createGameMetric = (newGameMetric) => GAMEMETRICAPI.post('/', newGameMetric);
export const updateGameMetric = (id, updatedGameMetric) => GAMEMETRICAPI.put(`/${id}`, updatedGameMetric);
export const deleteGameMetric = (id) => GAMEMETRICAPI.delete(`/${id}`);

// creator
const KYCAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchKYC = () => KYCAPI.get('/');
export const fetchSingleKYC = (id) => KYCAPI.get(`/${id}`);
export const createKYC = (newKYC) => KYCAPI.post('/', newKYC);
export const updateKYC = (id, updatedKYC) => KYCAPI.put(`/${id}`, updatedKYC);
export const deleteKYC = (id) => KYCAPI.delete(`/${id}`);

// creator
const WITHDRAWALAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchHostWithdrawal = () => WITHDRAWALAPI.get('/');
export const fetchSingleHostWithdrawal = (id) => WITHDRAWALAPI.get(`/${id}`);
export const createHostWithdrawal = (newHostWithdrawal) => WITHDRAWALAPI.post('/', newHostWithdrawal);
export const updateHostWithdrawal = (id, updatedHostWithdrawal) => WITHDRAWALAPI.put(`/${id}`, updatedHostWithdrawal);
export const deleteHostWithdrawal = (id) => WITHDRAWALAPI.delete(`/${id}`);
