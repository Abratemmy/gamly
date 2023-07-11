import * as api from "../../APIS/API";

import { START_LOADING, END_LOADING, GETWITHDRAWALMANAGEMENT, DELETEWITHDRAWALMANAGEMENT, UPDATEWITHDRAWALMANAGEMENT, CREATEWITHDRAWALMANAGEMENT, GETSINGLEWITHDRAWALMANAGEMENT, PAGE_ERROR } from "../CONSTANT/actionTypes";

export const getAllWITHDRAWAL = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchHostWithdrawal();
        dispatch({ type: GETWITHDRAWALMANAGEMENT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        dispatch({ type: PAGE_ERROR })
        console.log(error.message)
    }
}

export const getSINGLEWITHDRAWAL = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSingleHostWithdrawal(id);

        dispatch({ type: GETSINGLEWITHDRAWALMANAGEMENT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        dispatch({ type: PAGE_ERROR })
        console.log(error.message)
    }
}

export const createWITHDRAWAL = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createHostWithdrawal(values);
        dispatch({ type: CREATEWITHDRAWALMANAGEMENT, payload: data });
        setLoading(false);
        clearCodeData()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            setSendInvite(false)
        }, 5000)



    } catch (error) {
        setLoading(false);
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updateWITHDRAWAL = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateHostWithdrawal(id, post);
        dispatch({ type: UPDATEWITHDRAWALMANAGEMENT, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteWITHDRAWAL = (id) => async (dispatch) => {
    try {
        await api.deleteHostWithdrawal(id);
        dispatch({ type: DELETEWITHDRAWALMANAGEMENT, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}