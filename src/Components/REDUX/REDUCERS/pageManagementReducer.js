import { GETPAGEMANAGE, DELETEPAGEMANAGE, UPDATEPAGEMANAGE, CREATEPAGEMANAGE } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const pageManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPAGEMANAGE:
            return action.payload;
        case CREATEPAGEMANAGE:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEPAGEMANAGE:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEPAGEMANAGE:
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