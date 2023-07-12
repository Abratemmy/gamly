import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATEREPORT, DELETEREPORT, GETREPORT, UPDATEREPORT } from "../CONSTANT/actionTypes";

const initialState = { items: [], isLoading: true }
export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case GETREPORT:
            return { ...state, getAllReports: action.payload };;
        case CREATEREPORT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEREPORT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEREPORT:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}