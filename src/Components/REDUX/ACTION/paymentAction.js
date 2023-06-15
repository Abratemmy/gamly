import * as api from "../../APIS/API";

import { GETPAYOUT, GETSINGLE } from "../CONSTANT/actionTypes";

export const getAllPAYMENTs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPayment();
        dispatch({ type: GETPAYOUT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSinglePayout = () => async (dispatch) => {
    try {
        const { data } = await api.fetchsinglepayout();
        dispatch({ type: GETSINGLE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}