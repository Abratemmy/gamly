import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./REDUCERS/adminReducer";
import { paymentReducer } from "./REDUCERS/payoutReducer";
import { pageManagementReducer } from "./REDUCERS/pageManagementReducer";
import { reportReducer } from "./REDUCERS/reportReducer";
import { salesReducer } from "./REDUCERS/salesReducer";
import { revenueReducer } from "./REDUCERS/revenueReducer";
import { codeManagementReducer } from "./REDUCERS/codeManagementReducer";
import { creatorReducer } from "./REDUCERS/creatorReducer";
import { gameMetricsReducer } from './REDUCERS/gameMetricsReducer'

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
    gameMetricsReducer
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store