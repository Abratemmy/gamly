import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATEREVENUE, DELETEREVENUE, GETREVENUE, UPDATEREVENUE } from "../CONSTANT/actionTypes";


const initialState = { items: [], isLoading: true }
export const revenueReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case GETREVENUE:
            return { ...state, getRevenueData: action.payload };
        case CREATEREVENUE:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEREVENUE:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEREVENUE:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}