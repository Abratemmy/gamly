import { GETCODEMANAGEMENT, DELETECODEMANAGEMENT, UPDATECODEMANAGEMENT, CREATECODEMANAGEMENT } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const codeManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCODEMANAGEMENT:
            return action.payload;
        case CREATECODEMANAGEMENT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATECODEMANAGEMENT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETECODEMANAGEMENT:
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