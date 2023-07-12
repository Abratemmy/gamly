import * as api from "../HOSTAPI/hostApi";

import { GETGAMETRICS, DELETEGAMETRICS, UPDATEGAMETRICS, CREATEGAMETRICS, GETSINGLEGAMETRICS } from "../HOSTCONSTANT/actionTypes";

export const getAllGAMETRICS = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGameMetrics();
        dispatch({ type: GETGAMETRICS, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getSINGLEGAMETRICS = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleGameMetric(id);

        dispatch({ type: GETSINGLEGAMETRICS, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createGAMETRICS = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createGameMetric(values);
        dispatch({ type: CREATEGAMETRICS, payload: data });
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

export const updateGAMETRICS = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateGameMetric(id, post);
        dispatch({ type: UPDATEGAMETRICS, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteGAMETRICS = (id) => async (dispatch) => {
    try {
        await api.deleteGameMetric(id);
        dispatch({ type: DELETEGAMETRICS, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}