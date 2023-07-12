import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "../../Admin/REDUCER/adminReducer";
import { paymentReducer } from "../../Admin/REDUCER/payoutReducer";
import { pageManagementReducer } from "../../Admin/REDUCER/pageManagementReducer";
import { reportReducer } from "../../Admin/REDUCER/reportReducer";
import { salesReducer } from "../../Admin/REDUCER/salesReducer";
import { revenueReducer } from "../../Admin/REDUCER/revenueReducer";
import { codeManagementReducer } from "../../Host/HOSTREDUCER/codeManagementReducer";
import { creatorReducer } from "../../Host/HOSTREDUCER/creatorReducer";
import { gameMetricsReducer } from '../../Host/HOSTREDUCER/gameMetricsReducer';
import { kycReducer } from "../../Host/HOSTREDUCER/kycReducer";
import { withdrawalReducer } from "../../Host/HOSTREDUCER/withdrawalReducer";
import { userReducer } from "../../User/USERREDUCER/userReducer";
import { userWithdrawalReducer } from "../../User/USERREDUCER/userWithdrawalReducer";
import { userKycReducer } from "../../User/USERREDUCER/userKYCReducer";

const composeEnhancers = composeWithDevTools({

});
const rootReducer = combineReducers({
    adminReducer,
    paymentReducer,
    pageManagementReducer,
    reportReducer,
    salesReducer,
    revenueReducer,
    codeManagementReducer,
    creatorReducer,
    gameMetricsReducer,
    kycReducer,
    withdrawalReducer,
    userReducer,
    userWithdrawalReducer,
    userKycReducer
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store