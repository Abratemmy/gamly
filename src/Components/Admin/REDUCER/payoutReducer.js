import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATEPAYOUT, DELETEPAYOUT, GETPAYOUT, GETSINGLEPAYOUT, UPDATEPAYOUT } from "../CONSTANT/actionTypes";

const initialState = { items: [], isLoading: true }

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case GETPAYOUT:
            return { ...state, payment: action.payload };
        case GETSINGLEPAYOUT:
            return { ...state, payment: action.payload }
        case CREATEPAYOUT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEPAYOUT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEPAYOUT:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}