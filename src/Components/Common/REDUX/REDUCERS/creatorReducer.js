import { GETCREATOR, GETSINGLECREATOR, DELETECREATOR, UPDATECREATOR, CREATECREATOR } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const creatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCREATOR:
            return action.payload;
        case GETSINGLECREATOR:
            return { ...state, creator: action.payload }
        case CREATECREATOR:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATECREATOR:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETECREATOR:
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