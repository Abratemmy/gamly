import * as api from "../../APIS/API";

import { FETCHADMIN, DELETEADMIN, UPDATEADMIN, CREATEADMIN } from "../CONSTANT/actionTypes";

export const getAllADMIN = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdmin();
        dispatch({ type: FETCHADMIN, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createADMIN = (roleForm, setLoading, setSuccess, setFailure, clearRoleForm, setApiError) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        setApiError(false)
        const { data } = await api.createAdmin(roleForm);
        dispatch({ type: CREATEADMIN, payload: data });
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

export const updateADMIN = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateAdmin(id, post);
        dispatch({ type: UPDATEADMIN, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteADMIN = (id) => async (dispatch) => {
    try {
        await api.deleteAdmin(id);
        dispatch({ type: DELETEADMIN, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}