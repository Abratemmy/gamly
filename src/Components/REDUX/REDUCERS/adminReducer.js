import { FETCHADMIN, DELETEADMIN, UPDATEADMIN, CREATEADMIN } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHADMIN:
            return action.payload;
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