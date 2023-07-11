import { GETGAMETRICS, GETSINGLEGAMETRICS, DELETEGAMETRICS, UPDATEGAMETRICS, CREATEGAMETRICS } from "../CONSTANT/actionTypes";

const initialState = { items: [] }

export const gameMetricsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETGAMETRICS:
            return action.payload;
        case GETSINGLEGAMETRICS:
            return { ...state, gamemetrics: action.payload }
        case CREATEGAMETRICS:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEGAMETRICS:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEGAMETRICS:
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