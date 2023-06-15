import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./REDUCERS/adminReducer";
import { paymentReducer } from "./REDUCERS/payoutReducer";
import { pageManagementReducer } from "./REDUCERS/pageManagementReducer";


const composeEnhancers = composeWithDevTools({

});
const rootReducer = combineReducers({
    adminReducer,
    paymentReducer,
    pageManagementReducer,
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store