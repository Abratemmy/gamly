import * as api from "../USERAPI/userApi";

import { GETUSERKYC, DELETEUSERKYC, UPDATEUSERKYC, CREATEUSERKYC, GETSINGLEUSERKYC } from "../USERCONSTANT/actionTypes";

export const getAllUSERKYC = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUserKYC();
        dispatch({ type: GETUSERKYC, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSINGLEUSERKYC = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleUserKYC(id);

        dispatch({ type: GETSINGLEUSERKYC, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createUSERKYC = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createUserKYC(values);
        dispatch({ type: CREATEUSERKYC, payload: data });
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

export const updateUSERKYC = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateUserKYC(id, post);
        dispatch({ type: UPDATEUSERKYC, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteKYC = (id) => async (dispatch) => {
    try {
        await api.deleteUserKYC(id);
        dispatch({ type: DELETEUSERKYC, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}