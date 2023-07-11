import * as api from "../../APIS/API";

import { GETCREATOR, DELETECREATOR, UPDATECREATOR, CREATECREATOR, GETSINGLECREATOR } from "../CONSTANT/actionTypes";

export const getAllCREATOR = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCreators();
        dispatch({ type: GETCREATOR, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSINGLECREATOR = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleCreator(id);

        dispatch({ type: GETSINGLECREATOR, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createCREATOR = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createCreator(values);
        dispatch({ type: CREATECREATOR, payload: data });
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

export const updateCREATOR = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateCreator(id, post);
        dispatch({ type: UPDATECREATOR, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteCREATOR = (id) => async (dispatch) => {
    try {
        await api.deleteCreator(id);
        dispatch({ type: DELETECREATOR, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}