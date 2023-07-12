import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import { CREATECODEMANAGEMENT, DELETECODEMANAGEMENT, GETCODEMANAGEMENT, UPDATECODEMANAGEMENT } from "../HOSTCONSTANT/actionTypes";


const initialState = { items: [], isLoading: true, isError: false }

export const codeManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETCODEMANAGEMENT:
            return action.payload;
        case CREATECODEMANAGEMENT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATECODEMANAGEMENT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETECODEMANAGEMENT:
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