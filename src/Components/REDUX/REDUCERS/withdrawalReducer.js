import { GETWITHDRAWALMANAGEMENT, GETSINGLEWITHDRAWALMANAGEMENT, DELETEWITHDRAWALMANAGEMENT, UPDATEWITHDRAWALMANAGEMENT, CREATEWITHDRAWALMANAGEMENT } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const hostWithdrawalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETWITHDRAWALMANAGEMENT:
            return action.payload;
        case GETSINGLEWITHDRAWALMANAGEMENT:
            return { ...state, hostWithdrawalData: action.payload }
        case CREATEWITHDRAWALMANAGEMENT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEWITHDRAWALMANAGEMENT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEWITHDRAWALMANAGEMENT:
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