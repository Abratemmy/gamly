import { GETREPORT, DELETEREPORT, UPDATEREPORT, CREATEREPORT } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETREPORT:
            return action.payload;
        case CREATEREPORT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEREPORT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEREPORT:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}