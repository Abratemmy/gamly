import * as api from "../../APIS/API";

import { GETPAGEMANAGE, DELETEPAGEMANAGE, UPDATEPAGEMANAGE, CREATEPAGEMANAGE } from "../CONSTANT/actionTypes";

export const getAllPAGEMANAGEMENT = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPage();
        dispatch({ type: GETPAGEMANAGE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPAGEMANAGEMENT = (roleForm, setLoading, setSuccess, setFailure, clearRoleForm, setApiError) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        setApiError(false)
        const { data } = await api.createPage(roleForm);
        dispatch({ type: CREATEPAGEMANAGE, payload: data });
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

export const updatePAGEMANAGEMENT = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePage(id, post);
        dispatch({ type: UPDATEPAGEMANAGE, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deletePAGEMANAGEMENT = (id) => async (dispatch) => {
    try {
        await api.deletePage(id);
        dispatch({ type: DELETEPAGEMANAGE, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}