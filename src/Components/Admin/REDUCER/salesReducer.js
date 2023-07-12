import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATESALES, DELETESALES, GETSALES, UPDATESALES } from "../CONSTANT/actionTypes";


const initialState = { items: [], isLoading: true }
export const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case GETSALES:
            return { ...state, getSalesData: action.payload };
        case CREATESALES:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATESALES:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETESALES:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}