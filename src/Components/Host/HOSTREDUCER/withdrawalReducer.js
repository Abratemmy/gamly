import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes"
import { CREATEWITHDRAWALMANAGEMENT, DELETEWITHDRAWALMANAGEMENT, GETSINGLEWITHDRAWALMANAGEMENT, GETWITHDRAWALMANAGEMENT, UPDATEWITHDRAWALMANAGEMENT } from "../HOSTCONSTANT/actionTypes"

const initialState = { items: [], isLoading: true, isError: false }

export const withdrawalReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETWITHDRAWALMANAGEMENT:
            return { ...state, withdrawalData: action.payload };
        case GETSINGLEWITHDRAWALMANAGEMENT:
            return { ...state, withdrawalData: action.payload }
        case CREATEWITHDRAWALMANAGEMENT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEWITHDRAWALMANAGEMENT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEWITHDRAWALMANAGEMENT:
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