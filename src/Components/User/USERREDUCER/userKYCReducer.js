import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { GETUSERKYC, GETSINGLEUSERKYC, DELETEUSERKYC, UPDATEUSERKYC, CREATEUSERKYC } from "../USERCONSTANT/actionTypes";

const initialState = { items: [], isLoading: true, isError: false }

export const userKycReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETUSERKYC:
            return action.payload;
        case GETSINGLEUSERKYC:
            return { ...state, kycData: action.payload }
        case CREATEUSERKYC:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEUSERKYC:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEUSERKYC:
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