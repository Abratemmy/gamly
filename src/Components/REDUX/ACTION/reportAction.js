import * as api from "../../APIS/API";

import { GETREPORT, DELETEREPORT, UPDATEREPORT, CREATEREPORT } from "../CONSTANT/actionTypes";

export const getAllREPORT = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReport();
        dispatch({ type: GETREPORT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createREPORT = (roleForm, setLoading, setSuccess, setFailure, clearRoleForm, setApiError) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        setApiError(false)
        const { data } = await api.createReport(roleForm);
        dispatch({ type: CREATEREPORT, payload: data });
        setLoading(false);
        clearRoleForm()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 5000)


    } catch (error) {
        setLoading(false);
        setApiError(error)
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updateREPORT = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateReport(id, post);
        dispatch({ type: UPDATEREPORT, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteREPORT = (id) => async (dispatch) => {
    try {
        await api.deleteReport(id);
        dispatch({ type: DELETEREPORT, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}