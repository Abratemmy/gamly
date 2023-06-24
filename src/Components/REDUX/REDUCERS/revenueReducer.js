import { GETREVENUE, DELETEREVENUE, UPDATEREVENUE, CREATEREVENUE } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const revenueReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETREVENUE:
            return action.payload;
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