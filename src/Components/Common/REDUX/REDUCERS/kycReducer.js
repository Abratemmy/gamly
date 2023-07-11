import { GETKYC, GETSINGLEKYC, DELETEKYC, UPDATEKYC, CREATEKYC } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const kycReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETKYC:
            return action.payload;
        case GETSINGLEKYC:
            return { ...state, kycData: action.payload }
        case CREATEKYC:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEKYC:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEKYC:
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