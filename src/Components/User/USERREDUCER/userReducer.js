import { GETUSER, GETSINGLEUSER, DELETEUSER, UPDATEUSER, CREATEUSER } from "../USERCONSTANT/actionTypes";

const initialState = { items: [] }

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETUSER:
            return action.payload;
        case GETSINGLEUSER:
            return { ...state, userData: action.payload }
        case CREATEUSER:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEUSER:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEUSER:
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