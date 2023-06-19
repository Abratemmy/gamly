import { GETSALES, DELETESALES, UPDATESALES, CREATESALES } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETSALES:
            return action.payload;
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