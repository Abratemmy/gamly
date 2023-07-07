import axios from "axios"


const ADMINAPI = axios.create({ baseURL: 'https://25957df9-9030-41a8-8c98-7a13ac051f9b.mock.pstmn.io' })

// ADMINAPI.interceptors.request.use(
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

export const fetchAdmin = () => ADMINAPI.get('/allAdmin');
export const createAdmin = (newAdmin) => ADMINAPI.post('/createAdmin', newAdmin);
export const updateAdmin = (id, updatedAdmin) => ADMINAPI.put(`/${id}`, updatedAdmin);
export const deleteAdmin = (id) => ADMINAPI.delete(`/${id}`);


// payout url https://dummy.restapiexample.com/api/v1/employee/${id}
const PAYMENTAPI = axios.create({ baseURL: 'https://fakestoreapi.com/products' })
export const fetchPayment = () => PAYMENTAPI.get('/');
export const fetchSinglePayout = (id) => PAYMENTAPI.get(`/${id}`);


// PAGE MANAGEMENT
const PAGEAPI = axios.create({ baseURL: 'https://10cd252b-feec-4f47-be29-6595c4480f9b.mock.pstmn.io' })
export const fetchPage = () => PAGEAPI.get('/getAllPage');
export const createPage = (newPage) => PAGEAPI.post('/addPage', newPage);
export const updatePage = (id, updatedPage) => PAGEAPI.put(`/updatePage/${id}`, updatedPage);
export const deletePage = (id) => PAGEAPI.post(`/deletePage`);

// REPORT
const REPORTAPI = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const fetchReport = () => REPORTAPI.get('/');
export const createReport = (newReport) => REPORTAPI.post('/', newReport);
export const updateReport = (id, updatedReport) => REPORTAPI.put(`/${id}`, updatedReport);
export const deleteReport = (id) => REPORTAPI.delete(`/${id}`);

// sales
const SALESAPI = axios.create({ baseURL: 'https://fakestoreapi.com/products' })
export const fetchSales = () => SALESAPI.get('/');
export const createSales = (newSales) => SALESAPI.post('/', newSales);
export const updateSales = (id, updatedSales) => SALESAPI.put(`/${id}`, updatedSales);
export const deleteSales = (id) => SALESAPI.delete(`/${id}`);

// revenue
const REVENUEAPI = axios.create({ baseURL: 'https://fakestoreapi.com/products' })
export const fetchRevenue = () => REVENUEAPI.get('/');
export const createRevenue = (newRevenue) => REVENUEAPI.post('/', newRevenue);
export const updateRevenue = (id, updatedRevenue) => REVENUEAPI.put(`/${id}`, updatedRevenue);
export const deleteRevenue = (id) => REVENUEAPI.delete(`/${id}`);

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