import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes"
import { CREATEPAGEMANAGE, DELETEPAGEMANAGE, GETPAGEMANAGE, UPDATEPAGEMANAGE } from "../CONSTANT/actionTypes"

const initialState = { items: [], isLoading: true, isError: false }

export const pageManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETPAGEMANAGE:
            return { ...state, getAllPage: action.payload };
        case CREATEPAGEMANAGE:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEPAGEMANAGE:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEPAGEMANAGE:
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