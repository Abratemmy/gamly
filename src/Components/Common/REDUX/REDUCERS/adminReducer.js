import { END_LOADING, START_LOADING, FETCHADMIN, DELETEADMIN, UPDATEADMIN, CREATEADMIN, PAGE_ERROR } from "../CONSTANT/actionTypes";

const initialState = { items: [], isLoading: true, isError: false }

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case PAGE_ERROR:
            return { ...state, isError: true }
        case FETCHADMIN:
            return { ...state, adminData: action.payload };
        case CREATEADMIN:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEADMIN:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEADMIN:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}