import { CREATECREATOR, DELETECREATOR, GETCREATOR, GETSINGLECREATOR, UPDATECREATOR } from "../HOSTCONSTANT/actionTypes";
import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes"

const initialState = { items: [], isLoading: true, isError: false }

export const creatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case GETCREATOR:
            return action.payload;
        case GETSINGLECREATOR:
            return { ...state, creator: action.payload }
        case CREATECREATOR:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATECREATOR:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETECREATOR:
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