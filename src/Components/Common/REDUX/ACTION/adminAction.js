import * as api from "../../APIS/API";

import { START_LOADING, END_LOADING, FETCHADMIN, DELETEADMIN, UPDATEADMIN, CREATEADMIN, PAGE_ERROR } from "../CONSTANT/actionTypes";

export const getAllADMIN = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchAdmin();
        dispatch({ type: FETCHADMIN, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        dispatch({ type: PAGE_ERROR })
        console.log(error.message)
    }
}

export const createADMIN = (values, setLoading, setSuccess, setFailure, clearAdmin) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createAdmin(values);
        dispatch({ type: CREATEADMIN, payload: data });
        setLoading(false);
        clearAdmin()
        setSuccess(true)

    } catch (error) {
        setLoading(false);
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