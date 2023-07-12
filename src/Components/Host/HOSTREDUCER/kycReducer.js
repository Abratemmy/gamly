import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { GETKYC, GETSINGLEKYC, DELETEKYC, UPDATEKYC, CREATEKYC } from "../HOSTCONSTANT/actionTypes";

const initialState = { items: [], isLoading: true, isError: false }

export const kycReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETKYC:
            return action.payload;
        case GETSINGLEKYC:
            return { ...state, kycData: action.payload }
        case CREATEKYC:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEKYC:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEKYC:
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