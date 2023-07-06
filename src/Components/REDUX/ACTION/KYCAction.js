import * as api from "../../APIS/API";

import { GETKYC, DELETEKYC, UPDATEKYC, CREATEKYC, GETSINGLEKYC } from "../CONSTANT/actionTypes";

export const getAllKYC = () => async (dispatch) => {
    try {
        const { data } = await api.fetchKYC();
        dispatch({ type: GETKYC, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSINGLEKYC = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleKYC(id);

        dispatch({ type: GETSINGLEKYC, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createKYC = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createKYC(values);
        dispatch({ type: CREATEKYC, payload: data });
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

export const updateKYC = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateKYC(id, post);
        dispatch({ type: UPDATEKYC, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteKYC = (id) => async (dispatch) => {
    try {
        await api.deleteKYC(id);
        dispatch({ type: DELETEKYC, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}