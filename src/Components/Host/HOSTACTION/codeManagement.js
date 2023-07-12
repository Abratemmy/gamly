import * as api from "../HOSTAPI/hostApi";

import { GETCODEMANAGEMENT, DELETECODEMANAGEMENT, UPDATECODEMANAGEMENT, CREATECODEMANAGEMENT } from "../HOSTCONSTANT/actionTypes";

export const getAllCODEMANAGEMENT = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCodeManagement();
        dispatch({ type: GETCODEMANAGEMENT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createCODEMANAGEMENT = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createCodeManagement(values);
        dispatch({ type: CREATECODEMANAGEMENT, payload: data });
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

export const updateCODEMANAGEMENT = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateCodeManagement(id, post);
        dispatch({ type: UPDATECODEMANAGEMENT, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteCODEMANAGEMENT = (id) => async (dispatch) => {
    try {
        await api.deleteCodeManagement(id);
        dispatch({ type: DELETECODEMANAGEMENT, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}