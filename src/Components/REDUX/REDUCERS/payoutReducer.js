import { CREATEPAYOUT, DELETEPAYOUT, GETPAYOUT, UPDATEPAYOUT } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPAYOUT:
            return action.payload;
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