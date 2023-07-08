import * as api from "../../APIS/API";

import { END_LOADING, GETPAYOUT, GETSINGLEPAYOUT, START_LOADING } from "../CONSTANT/actionTypes";

export const getAllPAYMENTs = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPayment();
        dispatch({ type: GETPAYOUT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSINGLEPAYMENT = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSinglePayout(id);

        dispatch({ type: GETSINGLEPAYOUT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}