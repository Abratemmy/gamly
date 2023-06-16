import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./REDUCERS/adminReducer";
import { paymentReducer } from "./REDUCERS/payoutReducer";
import { pageManagementReducer } from "./REDUCERS/pageManagementReducer";
import { reportReducer } from "./REDUCERS/reportReducer";


const composeEnhancers = composeWithDevTools({

});
const rootReducer = combineReducers({
    adminReducer,
    paymentReducer,
    pageManagementReducer,
    reportReducer
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store