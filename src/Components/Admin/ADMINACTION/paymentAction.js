import { END_LOADING, START_LOADING } from '../../Common/REDUX/CONSTANT/actionTypes';
import * as api from '../API/adminApi'
import { GETPAYOUT, GETSINGLEPAYOUT } from '../CONSTANT/actionTypes';

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