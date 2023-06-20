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

export const createPAGEMANAGEMENT = (values, setLoading, setSuccess, setFailure, clearPages) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createPage(values);
        dispatch({ type: CREATEPAGEMANAGE, payload: data });
        setLoading(false);
        clearPages()
        setSuccess(true)

    } catch (error) {
        setLoading(false);
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updatePAGEMANAGEMENT = (id, values, setLoading, setSuccess, setFailure, clearPages) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.updatePage(id, values);
        dispatch({ type: UPDATEPAGEMANAGE, payload: data });
        setLoading(false);
        clearPages()
        setSuccess(true)
    } catch (error) {
        setLoading(false);
        setSuccess(false)
        setFailure(true)
        console.log(error)
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deletePAGEMANAGEMENT = (id) => async (dispatch) => {
    try {
        await api.deletePage(id);
        dispatch({ type: DELETEPAGEMANAGE, payload: id });

    } catch (error) {
        console.log(error)
    }
}