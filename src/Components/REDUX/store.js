import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./REDUCERS/adminReducer";


const composeEnhancers = composeWithDevTools({

});
const rootReducer = combineReducers({
    adminReducer,
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store