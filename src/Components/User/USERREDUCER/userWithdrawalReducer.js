import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes"
import { CREATEUSERWITHDRAWALMANAGEMENT, DELETEUSERWITHDRAWALMANAGEMENT, GETSINGLEUSERWITHDRAWALMANAGEMENT, GETUSERWITHDRAWALMANAGEMENT, UPDATEUSERWITHDRAWALMANAGEMENT } from "../USERCONSTANT/actionTypes"

const initialState = { items: [], isLoading: true, isError: false }

export const userWithdrawalReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETUSERWITHDRAWALMANAGEMENT:
            return { ...state, withdrawalData: action.payload };
        case GETSINGLEUSERWITHDRAWALMANAGEMENT:
            return { ...state, withdrawalData: action.payload }
        case CREATEUSERWITHDRAWALMANAGEMENT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEUSERWITHDRAWALMANAGEMENT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEUSERWITHDRAWALMANAGEMENT:
            // return {
            //     items: state.items.filter((item) =>
            //         item.page_id !== action.payload
            //     )
            // };
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        default:
            return state;
    }
}