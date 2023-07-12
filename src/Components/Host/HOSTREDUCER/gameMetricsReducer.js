import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATEGAMETRICS, DELETEGAMETRICS, GETGAMETRICS, GETSINGLEGAMETRICS, UPDATEGAMETRICS } from "../HOSTCONSTANT/actionTypes";

const initialState = { items: [], isLoading: true, isError: false }

export const gameMetricsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETGAMETRICS:
            return action.payload;
        case GETSINGLEGAMETRICS:
            return { ...state, gamemetrics: action.payload }
        case CREATEGAMETRICS:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEGAMETRICS:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEGAMETRICS:
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